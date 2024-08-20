const student=[
    {studentName:'A',score:[77,84,53]},
    {studentName:'B',score:[74,54,67]},
    {studentName:'C',score:[73,46,91]},
    {studentName:'D',score:[67,78,72]}
];

const averageStudent=student.map((i)=>{
    let sum=i.score.reduce((a,b)=>a+b);
    return {studentName:i.studentName,avg:sum/i.score.length}
})

const highAverage=averageStudent.filter((i)=>{
    return i.avg>70
})
console.log(highAverage[5])