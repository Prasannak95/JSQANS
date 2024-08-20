const arr1=[
    {empName:'A',id:1,age:78},
    {empName:'B',id:2,age:45},
    {empName:'C',id:3,age:42},
    {empName:'D',id:4,age:59},
];

const func=(arr,id,ageT)=>{
        const res=arr.map((i)=>{
            
            if(i.id===id){
              return {empName:i.empName,id:i.id,age:ageT}
            }
            return {empName:i.empName,id:i.id,age:i.age}
        })
        return res;
}

const newObj=func(arr1,3,66);

for(let i of newObj){
    console.log(i)
}

