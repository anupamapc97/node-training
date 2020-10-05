var x=require('node-fetch')
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
async function readme(callback){
var s=await x('https://jsonplaceholder.typicode.com/comments')
var a=await s.json()
callback(a)
}
function disp(){
    console.log("titles inside the api")
    readme(function(readme){
        readme.map(x=>{
        console.log(x.email)})}
).catch(
    err=>console.log(err)
)
}
// }.catch(err=>console.log(err)
// )
disp()