const arr=[1,2,3,4,5,6,7,8];

const res=arr.map((i,j)=>{
    return `Index is ${j}, ${i*i}`
});

console.log(res);

const users=[
    {userNAme:'A', age:1},
    {userNAme:'B', age:2},
    {userNAme:'C', age:3},
    {userNAme:'D', age:4}
];

const fName=users.map((i)=>{
    return i.userNAme
})
console.log(fName)