const arr=[
    {fName:'A',mark:45},
    {fName:'B',mark:55},
    {fName:'C',mark:73},
    {fName:'D',mark:78},
];

const res=arr.reduce((a,b)=>{
    return a+b.mark
},0);
console.log(res)