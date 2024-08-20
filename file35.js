const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];


  const res=input.map((i)=>{
    return i.age;
  })
console.log(res)
 const min= Math.min(...res);
 const max=Math.max(...res);
 const diff=max-min;
 console.log(min)
 console.log(diff)