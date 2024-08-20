const students=[
    {studentName:'A',score:[48,75,67]},
    {studentName:'B',score:[74,64,62]},
    {studentName:'C',score:[77,43,62]},
    {studentName:'D',score:[64,67,72]},
];

averageStudents=students.map((i)=>{
    const sum=i.score.reduce((a,b)=>a+b);
    return {fName:i.studentName,avg:sum/i.score.length}
});

const higherAvg=averageStudents.filter((i)=>{
    return i.avg>65
})

console.log(higherAvg)

for(let i of higherAvg){
console.log(i.fName)
}