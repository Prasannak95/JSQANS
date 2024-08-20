// for(var i=0;i<=2;i++){
//     setTimeout(function(){
//         console.log(i)
//     },100)
// }

// o/p
// 3
// 3
// 3

for(var i=0;i<=2;i++){
    print(i);
}

function print(i){
    setTimeout(function(){
        console.log(i)
    },100)
}