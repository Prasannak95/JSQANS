const product=[
    {produxtName:'A',id:1,price:1000},
    {produxtName:'B',id:2,price:4250},
    {produxtName:'C',id:3,price:7461},
    {produxtName:'D',id:4,price:6489}
];

const totalPrice=product.reduce((totalPrice,acc)=>{
    return totalPrice+acc.price
},0);
console.log(totalPrice)