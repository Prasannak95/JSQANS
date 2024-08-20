const obj1=[
    {fName:'A',age:1,gender:'Male'},
    {fName:'B',age:2,gender:'Female'},
    {fName:'C',age:3,gender:'Male'},
    {fName:'D',age:4,gender:'Female'}
];

const [{fName},,,{age}]=obj1;
console.log(fName);
console.log(age)