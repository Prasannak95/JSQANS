const input = "Every developer likes to mix kubernetes and javascript";

// const func=(word)=>{
//         return word[0] +(word.length-2)+word[word.length-1]
// };


// const res=input.split(' ').map((i)=>{
//     if(i.length>=4){
//         return func(i)
//     }
//     return i
// }).join(' ')
// console.log(res)

const func=(word)=>{
            return word[0]+(word.length-2)+word[word.length-1]
};

const res=input.split(' ').map((i)=>{
    if(i.length>=4){
        return func(i)
    }
    return i
}).join(' ');

console.log(res)