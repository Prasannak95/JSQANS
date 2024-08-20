const obj=[
    {firstName:'A',id:1,age:70},
    {firstName:'B',id:2,age:40},
    {firstName:'C',id:3,age:80},
    {firstName:'D',id:4,age:90},
];

const func=(arr,tId,tAge)=>{
   let arr2= obj.map((i)=>{
        if(i.id===tId){
            return {firstName:i.firstName,id:i.id,age:tAge}
        }
        return {firstName:i.firstName,id:i.id,age:i.age}
    })
    return arr2
};

const res=func(obj,2,66);

for(let i in res){
    console.log(res[i])
}

for(let i of res){
    console.log(i)
}