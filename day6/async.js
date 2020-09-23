// async function example(){
//     return "hi hellooo"
// }

// example().then(
//     res=>console.log(res)
// )

function getdata(){
    return new Promise(
        resolve=>{
            setTimeout(()=>{
                resolve("resolved data")
            ,7000});
        }
    )
}
async function getAsyncData(){
    console.log("reached")
    const result=await getdata()
    console.log(result)
}
getAsyncData()