import * as THREE from 'three';

import { createSculptedHead } from './sculpted-head';

export function mountAssembly(host: HTMLElement) {
  const container = host.querySelector<HTMLElement>('.assembly-canvas')!;
  const fallback = host.querySelector<SVGElement>('.assembly-fallback');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;
  const compact = matchMedia('(max-width: 767px)').matches;
  let renderer: THREE.WebGLRenderer;
  try { renderer = new THREE.WebGLRenderer({alpha:true,antialias:!compact,powerPreference:'low-power'}); }
  catch { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio,compact?1.25:1.75));
  renderer.setClearColor(0,0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  Object.assign(renderer.domElement.style, {position:'absolute',inset:'0',width:'100%',height:'100%',display:'block'});
  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(33,1,.1,40);
  camera.position.set(0,.05,9.3);
  camera.lookAt(0,-.12,0);
  camera.position.set(0,-.3,12);
  camera.lookAt(0,.15,0);
  scene.add(new THREE.HemisphereLight(0xe3efff,0x203151,2.1));
  const key=new THREE.DirectionalLight(0xffffff,3.2);key.position.set(-3,5,5);scene.add(key);
  const rim=new THREE.DirectionalLight(0x78a8ff,2.8);rim.position.set(3,1,-2);scene.add(rim);
  const head=new THREE.Group();head.scale.setScalar(1.2);scene.add(head);
  const {nodes}=createSculptedHead(compact?.09:.06);
  const points=nodes;
  const geometry=new THREE.BoxGeometry(.046,.065,.048);
  const material=new THREE.MeshStandardMaterial({roughness:.4,metalness:.2});
  const cubes=new THREE.InstancedMesh(geometry,material,points.length);
  cubes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);cubes.frustumCulled=false;head.add(cubes);
  const color=new THREE.Color(),dummy=new THREE.Object3D();
  points.forEach((p,i)=>cubes.setColorAt(i,color.setHex(p.color)));
  const positions=new Float32Array(points.length*3);
  const positionAttribute=new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage);
  const random=(i:number)=>{const n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n);};
  const starts=points.map((p,i)=>new THREE.Vector3(p.x*2+(random(i)-.5)*2,p.y+(random(i+7)-.5)*2,(random(i+19)-.5)*3));
  const eyes=new THREE.Group();head.add(eyes);
  const pupils:THREE.Group[]=[];
  const eyeGeometry=new THREE.SphereGeometry(.045,8,6);
  const eyeMaterial=new THREE.MeshStandardMaterial({color:0x42587b,roughness:.22,metalness:.4});
  for(const side of [-1,1]){
    const eye=new THREE.Group();eye.position.set(side*.46,.4,.57);eyes.add(eye);
    const pupil=new THREE.Group();pupil.add(new THREE.Mesh(eyeGeometry,eyeMaterial));eye.add(pupil);pupils.push(pupil);
  }
  const target=new THREE.Vector2(), gaze=new THREE.Vector2(), rotation=new THREE.Vector2();
  let elapsed=0,last=0,visible=true,disposed=false,assembled=false;
  function render() { renderer.render(scene,camera); if(fallback) fallback.style.display='none'; host.classList.add('assembly-ready'); }
  function tick(now:number) {
    if(disposed) return;
    const dt=last?Math.min((now-last)/1000,.05):0; last=now;
    elapsed+=dt;
    if(!assembled) {
      const progress=Math.min(1,elapsed/3.5);
      points.forEach((p,i)=>{
        const t=THREE.MathUtils.clamp((progress-random(i+31)*.16)/.84,0,1);
        const ease=1-Math.pow(1-t,3);
        positions[i*3]=THREE.MathUtils.lerp(starts[i].x,p.x,ease);
        positions[i*3+1]=THREE.MathUtils.lerp(starts[i].y,p.y,ease);
        positions[i*3+2]=THREE.MathUtils.lerp(starts[i].z,p.z,ease);
        dummy.position.fromArray(positions,i*3);
        dummy.scale.setScalar(compact?1.3:1);
        dummy.rotation.set(0,0,(1-ease)*.3);dummy.updateMatrix();cubes.setMatrixAt(i,dummy.matrix);


      });
      positionAttribute.needsUpdate=true; cubes.instanceMatrix.needsUpdate=true;
      eyes.scale.setScalar(Math.max(.001,THREE.MathUtils.smoothstep(progress,.65,1)));
      assembled=progress===1;
    }
    const influence=THREE.MathUtils.smoothstep(elapsed,2.8,3.5);
    gaze.lerp(target,1-Math.exp(-dt*13));
    rotation.lerp(target,1-Math.exp(-dt*4));
    head.rotation.set(-rotation.y*.3*influence,rotation.x*.38*influence,-rotation.x*.025*influence);
    pupils.forEach(p=>p.position.set(gaze.x*.065*influence,gaze.y*.025*influence,0));
    render();
    if(assembled && rotation.distanceTo(target)<.001 && gaze.distanceTo(target)<.001) {
      renderer.setAnimationLoop(null); last=0;
    }
  }
  function wake() {
    if(!disposed && visible && !document.hidden) {renderer.setAnimationLoop(tick);}
  }
  function resize() {
    const rect=container.getBoundingClientRect();
    if(!rect.width||!rect.height)return;
    camera.aspect=rect.width/rect.height;
    const halfFov=THREE.MathUtils.degToRad(camera.fov/2);
    camera.position.z=.9+Math.max(6.8/(2*Math.tan(halfFov)*.92),3.0/(2*Math.tan(halfFov)*camera.aspect*.88));
    camera.updateProjectionMatrix(); renderer.setSize(rect.width,rect.height,false); wake();
  }
  const abort=new AbortController();
  const options={passive:true,signal:abort.signal};
  const touchViewport=matchMedia('(max-width: 1023px)');
  const mouseAvailable=matchMedia('(any-hover: hover) and (any-pointer: fine)');
  let finger:{id:number;x:number;y:number}|null=null;
  const canFollowTouch=()=>touchViewport.matches&&!mouseAvailable.matches;
  function aimAt(clientX:number,clientY:number) {
    if(!visible)return;
    const rect=container.getBoundingClientRect();
    target.set(THREE.MathUtils.clamp((clientX-rect.left-rect.width/2)/(innerWidth*.4),-1,1),
      THREE.MathUtils.clamp(-(clientY-rect.top-rect.height/2)/(innerHeight*.4),-1,1));
    wake();
  }
  function releaseFinger() {finger=null;target.set(0,0);wake();}
  window.addEventListener('pointermove',event=>{
    if(event.pointerType!=='mouse'||compact||!visible)return;
    aimAt(event.clientX,event.clientY);
  },options);
  // Passive touch events keep native scrolling; pointermove may be cancelled by a pan.
  window.addEventListener('touchstart',event=>{
    if(!canFollowTouch()||event.touches.length!==1){if(finger)releaseFinger();return;}
    const touch=event.touches[0];
    finger={id:touch.identifier,x:touch.clientX,y:touch.clientY};
    aimAt(finger.x,finger.y);
  },options);
  window.addEventListener('touchmove',event=>{
    if(!finger)return;
    if(!canFollowTouch()||event.touches.length!==1){releaseFinger();return;}
    const touch=Array.from(event.touches).find(t=>t.identifier===finger!.id);
    if(!touch){releaseFinger();return;}
    finger.x=touch.clientX;finger.y=touch.clientY;
    aimAt(finger.x,finger.y);
  },options);
  for(const type of ['touchend','touchcancel'] as const){
    window.addEventListener(type,()=>{if(finger)releaseFinger();},options);
  }
  window.addEventListener('scroll',()=>{if(finger)aimAt(finger.x,finger.y);},options);
  touchViewport.addEventListener('change',()=>{if(finger)releaseFinger();},{signal:abort.signal});
  mouseAvailable.addEventListener('change',()=>{if(finger)releaseFinger();},{signal:abort.signal});
  document.documentElement.addEventListener('pointerleave',()=>{target.set(0,0);wake();},options);
  window.addEventListener('blur',releaseFinger,{signal:abort.signal});
  const resizeObserver=new ResizeObserver(resize); resizeObserver.observe(container);
  const intersection=new IntersectionObserver(([entry])=>{
    visible=entry.isIntersecting;
    if(visible){if(finger)aimAt(finger.x,finger.y);wake();}else {renderer.setAnimationLoop(null);last=0;}
  }); intersection.observe(host);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){renderer.setAnimationLoop(null);last=0;}else wake();},{signal:abort.signal});
  function dispose() {
    if(disposed)return; disposed=true;
    renderer.setAnimationLoop(null);abort.abort();resizeObserver.disconnect();intersection.disconnect();
    cubes.dispose();geometry.dispose();material.dispose();eyeGeometry.dispose();eyeMaterial.dispose();
    renderer.dispose();renderer.domElement.remove();if(fallback) fallback.style.display='';host.classList.remove('assembly-ready');
  }
  renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();dispose();},{signal:abort.signal});
  motion.addEventListener('change',()=>{if(motion.matches)dispose();},{signal:abort.signal});
  window.addEventListener('pagehide',dispose,{once:true,signal:abort.signal});
  if(import.meta.hot)import.meta.hot.dispose(dispose);
  resize();wake();
}
