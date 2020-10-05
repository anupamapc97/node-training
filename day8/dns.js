const { doesNotMatch } = require('assert')
const a=require('dns')
a.lookup('www.google.com',(err,address)=>{
    console.log("add",address)
    if(err)
    console.log("err",err)
// console.log(data.toString())
}
)