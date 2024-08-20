const obj1={
    firstName:'Prasanna',
    age:15,
    getNameL:()=>{
        console.log(this.firstName)
    }
};

const obj2={
    firstName:'Name2',
    age:20
}
obj1.getNameL.call({firstName:'Harshit'})
obj1.getNameL.bind({firstName:"name2"})