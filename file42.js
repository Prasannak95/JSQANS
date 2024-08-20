const obj=[
    {firstName:'A',id:1,score:[75,45,86]},
    {firstName:'B',id:2,score:[66,85,55]},
    {firstName:'C',id:3,score:[70,45,66]},
    {firstName:'D',id:4,score:[71,52,63]},
];


const avg=obj.map((i)=>{
    const sum=i.score.reduce((a,b)=>a+b);
    return {firstName:i.firstName,id:i.id,avg:sum/i.score.length}
});

const higherAvg=avg.filter((i)=>i.avg>65);
console.log(higherAvg)