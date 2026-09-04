import samples from '../data/head-scan.json';
import visor from '../data/visor-scan.json';
export type HeadNode = {x:number;y:number;z:number;color:number};
const random=(i:number)=>{const n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n);};
export function createSculptedHead(step=.06) {
  const nodes:HeadNode[]=[];
  samples.forEach((p,i)=>{
    if(step>.07 && i%2)return;
    const y=(p[1]-2.08)*1.16+2.08;
    const x=p[0]*1.08;
    if(y<-.65 && (Math.abs(x)>.62 || random(i+2900)>Math.max(0,(y+1.65))))return;
    const facing=Math.max(0,p[5]);
    const light=Math.max(0,-p[3]*.35+p[4]*.55+p[5]*.7);
    const r=Math.round(55+125*light+25*facing),g=Math.round(78+125*light+18*facing),b=Math.round(115+115*light);
    nodes.push({x,y,z:p[2]*1.08,color:(Math.min(r,255)<<16)|(Math.min(g,255)<<8)|Math.min(b,255)});
  });
  visor.forEach((p,i)=>{
    if(step>.07 && i%2)return;
    const facing=Math.max(0,p[5]);
    const light=Math.max(0,-p[3]*.35+p[4]*.55+p[5]*.7);
    const r=Math.round(55+125*light+25*facing),g=Math.round(78+125*light+18*facing),b=Math.round(115+115*light);
    nodes.push({x:p[0],y:p[1],z:p[2],color:(Math.min(r,255)<<16)|(Math.min(g,255)<<8)|Math.min(b,255)});
  });
  return {nodes};
}
