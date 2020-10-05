var fetch=require('node-fetch')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

async function appData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let x = await response.json()
    return x
}
appData().then(
res=>{
    res.map(x=>{
        console.log(x)
    })
}
)
function abc(){
    fetch('https://jsonplaceholder.typicode.com/comments').then
}