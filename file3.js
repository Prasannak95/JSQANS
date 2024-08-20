const arr1=[1,2,3,4];
const arr2=[...arr1,5]

const obj1={
    a:1,
    b:{c:2}
};

const obj2={...obj1}
obj2.b.c=7
console.log(obj2.b.c )
console.log('obj1',obj1);



