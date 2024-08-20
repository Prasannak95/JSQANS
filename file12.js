// const obj1=[
//     {studentName:'A',score:[45,78,55]},
//     {studentName:'B',score:[77,86,45]},
//     {studentName:'C',score:[84,75,62]},
//     {studentName:'D',score:[76,62,77]}
// ];

// const average=obj1.map((i)=>{
// const sum=i.score.reduce((acc,score)=>acc+score)
// return {sName:i.studentName,sAvg:sum/i.score.length}
// })

// const highPerformance=average.filter((i)=>i.sAvg>70);
// console.log(highPerformance[0])
// console.log(highPerformance[1])


// const student=[
//     {studentName:'A',score:[49,76,88]},
//     {studentName:'B',score:[88,76,64]},
//     {studentName:'C',score:[75,68,72]},
//     {studentName:'D',score:[97,66,45]}
// ];

// const average=student.map((i)=>{
//    const score= i.score.reduce((a,b)=>a+b)
//     return {sName:i.studentName,avg:score/i.score.length}
// });

// const highestScore=average.filter((i)=>i.avg>70);
// console.log(highestScore)

// const students=[
//     {studentName:'A',score:[77,88,57]},
//     {studentName:'B',score:[87,67,81]},
//     {studentName:'C',score:[79,88,93]},
//     {studentName:'D',score:[77,98,76]}
// ];

// const averageStudent=students.map((i)=>{
//     const sum=i.score.reduce((a,b)=>a+b);
//     return {sName:i.studentName,avg:sum/i.score.length}
// });

// const highAvg=averageStudent.filter((i)=>i.avg>75);
// console.log(highAvg)

// const students=[
//     {studentName:'A',score:[74,85,46]},
//     {studentName:'B',score:[67,76,66]},
//     {studentName:'C',score:[75,81,46]},
//     {studentName:'D',score:[94,49,71]}
// ]

// const avgStudents=students.map((i)=>{
//     const sum=i.score.reduce((a,b)=>a+b);
//     return {sName:i.studentName,avg:sum/i.score.length}
// });

// const highAverage=avgStudents.filter((i)=>i.avg>70);
// console.log(highAverage[0])


const obj1=[
    {firstName:'A',score:[74,84,64]},
    {firstName:'B',score:[48,86,64]},
    {firstName:'C',score:[76,84,66]},
    {firstName:'D',score:[77,67,71]}
];

const averageStudent=obj1.map((i)=>{
    const sum=i.score.reduce((a,b)=>a+b)
    return {studentName:i.firstName,avg:sum/i.score.length}
});

const higherAverage=averageStudent.filter((i)=>i.avg>70);
console.log(higherAverage[0]);

for(let i in higherAverage){
    console.log(higherAverage[i])
}