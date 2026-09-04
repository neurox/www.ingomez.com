import fs from 'node:fs';
import { Vector3, Matrix4 } from 'three';
const model=JSON.parse(fs.readFileSync('assets/source/visor/scene.gltf','utf8'));
const bin=fs.readFileSync('assets/source/visor/scene.bin');
function read(id){
  const a=model.accessors[id],v=model.bufferViews[a.bufferView],n={SCALAR:1,VEC3:3,VEC2:2}[a.type];
  const bytes=a.componentType===5123?2:4, method=a.componentType===5126?'readFloatLE':a.componentType===5123?'readUInt16LE':'readUInt32LE';
  return Array.from({length:a.count},(_,i)=>Array.from({length:n},(_,k)=>bin[method]((v.byteOffset||0)+(a.byteOffset||0)+i*(v.byteStride||n*bytes)+k*bytes)));
}
const grid=new Map();
const fit=new Matrix4().set(1.08,0,0,-.045,0,1.1,0,.40,0,0,1.4,.12,0,0,0,1);
function visit(id,parent){
  const node=model.nodes[id],world=parent.clone().multiply(node.matrix?new Matrix4().fromArray(node.matrix):new Matrix4());
  if(node.mesh!==undefined) for(const primitive of model.meshes[node.mesh].primitives){
    const matrix=fit.clone().multiply(world);
    const p=read(primitive.attributes.POSITION).map(p=>new Vector3(...p).applyMatrix4(matrix));
    const indices=read(primitive.indices).flat();
    for(let i=0;i<indices.length;i+=3){
      const a=p[indices[i]],b=p[indices[i+1]],c=p[indices[i+2]];
      const normal=b.clone().sub(a).cross(c.clone().sub(a)).normalize();
      const steps=Math.ceil(Math.max(a.distanceTo(b),a.distanceTo(c),b.distanceTo(c))/.025);
      for(let u=0;u<=steps;u++)for(let v=0;v<=steps-u;v++){
        const point=a.clone().multiplyScalar(1-(u+v)/steps).addScaledVector(b,u/steps).addScaledVector(c,v/steps);
        const key=point.toArray().map(v=>Math.round(v/.043)).join(',');
        grid.set(key,[...point.toArray(),...normal.toArray()].map(v=>+v.toFixed(4)));
      }
    }
  }
  for(const child of node.children||[])visit(child,world);
}
for(const id of model.scenes[model.scene||0].nodes)visit(id,new Matrix4());
fs.writeFileSync('src/data/visor-scan.json',JSON.stringify([...grid.values()]));
console.log('Visor samples:',grid.size);
