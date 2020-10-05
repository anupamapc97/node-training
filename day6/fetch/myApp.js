var fetch = require('node-fetch')
const { title } = require('process')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

async function getApiData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let user = await response.json()
    return user
}
getApiData().then(
    // res=>{
    //     for(var i=0;i<res.length;i++){
    //   console.log(res[i].title)  
    // }}
    // res => {
    //     res.forEach(element => {
    //         if(element.userId=='1'){
    //         console.log(element)
    //     }})
    //     // console.log(res)
    // }
    res => {
        var arr=res.filter(res=>res.userId=='1')
        console.log(arr)
}
).catch(
    err => console.log(err)
)