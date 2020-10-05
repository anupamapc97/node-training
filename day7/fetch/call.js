var e=require('node-fetch')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
// async function se(){
// var q=await e('https://jsonplaceholder.typicode.com/comments')
// var u=await q.json()
// return u}
// se().then(
// res=>{res.map(u=>{
//     console.log(u.email)
// })
// })
// se()
var q= e('https://jsonplaceholder.typicode.com/comments')
var u=q.json()
u.map(x=>{console.log(x.email)})