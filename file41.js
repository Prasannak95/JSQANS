const word='There is a big tree behind the this cars.'

const res=word.split(' ').map((i)=>{
    if(i.length>=4){
        return i[0]+(i.length-2)+i[i.length-1]
    }
    return i
}).join(' ');

console.log(res);