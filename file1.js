console.log(fisrtName);
var fisrtName='Prasanna'

func();
function func(){
    console.log('Inside func')
}

const func1=()=>{

    let a='Outside'

    return func2=()=>{
        console.log(a)
    }
}
const res=func1()
res()