const obj1=[
    {firstName:'A',age:1},
    {firstName:'B',age:2},
    {firstName:'C',age:3},
    {firstName:'D',age:4},
    {firstName:'E',age:5},
    {firstName:'F',age:6},
    {firstName:'G',age:7},
    {firstName:'H',age:8},
    {firstName:'I',age:9},
    {firstName:'J',age:10}
];

const chagneAge=function(arr,ag,target){
    
    const res=arr.map((i)=>{
       if(i.age===ag){
        return {firstName:i.firstName,age:target}
       }
       return {firstName:i.firstName,age:i.age}
    })
    return res;
};
const newRes=chagneAge(obj1,9,99)
console.log(newRes[8])
for(let i in newRes){
    console.log(newRes[i])
}