const input=[1,-5,3,7,-4,6,8,3,-11,46];

// const res=input.map((i)=>{
//     if(i>0){
//         return i*2
//     }
// })
// console.log(res)

const res=input.filter((i)=>i>0).reduce((a,b)=>{ return a+b},0);

console.log(res)