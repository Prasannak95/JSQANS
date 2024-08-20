const word="There is a big tree on the hill it is looking big";

const arr=word.split(' ').map((i)=>{
    if(i.length>=4){
        return i[0]+(i.length-2)+i[i.length-2]
    }
    return i
}).join(' ')
console.log(arr)