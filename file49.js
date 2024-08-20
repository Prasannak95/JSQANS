const arr1=[
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 28 }]
//    [
//     { id: 1, name: 'Alice', age: 30 },
//     { id: 2, name: 'Bob', age: 24 },
//     { id: 3, name: 'Charlie', age: 40 }]

function changeAge(arr, id, age){
        const newArr=arr.map((i)=>{
                if(i.id===id){
                    return {id:i.id,name:i.name,age:age}
                }
                return {id:i.id,name:i.name,age:i.age}
        })
        return newArr
}

const result=changeAge(arr1,3,40)
// result.array.forEach(element => {
//     console.log(element)
// });
console.log(result[2])