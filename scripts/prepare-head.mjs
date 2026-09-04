import fs from 'node:fs';
const b=fs.readFileSync('assets/source/LeePerrySmith.glb');
const length=b.readUInt32LE(12),j=JSON.parse(b.toString('utf8',20,20+length));
const bin=b.subarray(28+length);
function accessor(id){
 const a=j.accessors[id],v=j.bufferViews[a.bufferView],n=a.type==='VEC3'?3:1;
 const read=a.componentType===5126?'readFloatLE':'readUInt16LE',bytes=a.componentType===5126?4:2;
 return Array.from({length:a.count},(_,i)=>Array.from({length:n},(_,k)=>bin[read]((v.byteOffset||0)+(a.byteOffset||0)+i*(v.byteStride||n*bytes)+k*bytes)));
}
const p=accessor(1),normal=accessor(2),idx=accessor(0).flat();
const grid=new Map();
const rand=i=>{const n=Math.sin(i*127.1+311.7)*43758.5453;return n-Math.floor(n);};
for(let i=0;i<idx.length;i+=3){
 const ids=idx.slice(i,i+3),a=p[ids[0]],c=p[ids[1]],d=p[ids[2]];
 const u=c.map((v,k)=>v-a[k]),v=d.map((v,k)=>v-a[k]);
 const cross=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
 const area=Math.hypot(...cross)*.5;
 const count=Math.max(1,Math.ceil(area*120));
 for(let n=0;n<count;n++){
  const r=Math.sqrt(rand(i*19+n)),s=rand(i*23+n+33),w=[1-r,r*(1-s),r*s];
  const xyz=[0,1,2].map(k=>w.reduce((sum,t,m)=>sum+t*p[ids[m]][k],0));
  const nn=[0,1,2].map(k=>w.reduce((sum,t,m)=>sum+t*normal[ids[m]][k],0));
  const x=xyz[0]*.6,y=xyz[1]*.6-.3,z=xyz[2]*.6;
  if(y< -1.7)continue;
  const key=[x,y,z].map(v=>Math.round(v/.043)).join(',');
  grid.set(key,[...([x,y,z].map(v=>+v.toFixed(4))),...nn.map(v=>+v.toFixed(3))]);
 }
}
fs.writeFileSync('src/data/head-scan.json',JSON.stringify([...grid.values()]));
console.log('Scan vertices:',p.length,'triangles:',idx.length/3,'surface samples:',grid.size);
