const items = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
  ];

  const res=items.reduce((i,b)=>{
    return i+b.price
  },0);

  console.log(res);


//   const items1 = [1, 2, 3, 1, 2, 3, 7, 8, 7];

// const noDuplicateItems = items1.reduce((accumulator, item) => {
//   if (!accumulator.includes(item)) {
//     accumulator.push(item);
//   }
//   return accumulator;
// }, []);

// console.log(noDuplicateItems); 
// // [ 1, 2, 3, 7, 8 ]


// const arr=[1,2,3,4,4,5,7,7,8,9,10,4,5];

// const res2=arr.reduce((acc,item)=>{
//         if(!acc.includes(item)){
//             acc.push(item)
//         }
//         return acc
// },[]);

// console.log(res2)

const items3 = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
  ];
  
  const res3=items.reduce((acc,item)=>{
    return acc+ item.price;
  },0)

  console.log(res3)