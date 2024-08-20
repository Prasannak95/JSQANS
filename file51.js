async function getData() {
    return await Promise.resolve("Happy")
  }
  
  const data = getData()
  
  console.log(data)
  data.then((i)=>{
    console.log(i)
  })