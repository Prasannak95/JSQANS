const students=[
    {studentName:'A',score:[90,85,92]},
    {studentName:'B',score:[70,80,85]},
    {studentName:'C',score:[90,95,85]},
    {studentName:'D',score:[100,100,100]}
]

const average=students.map((student)=>{
 const sum=student.score.reduce((acc,score)=>acc+score)
    return {sName:student.studentName,score:sum/student.score.length}
})

const highPerformance=average.filter((s)=>s.score>90);

console.log(highPerformance[0])