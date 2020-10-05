// var a=require('fs')
// a.readFile("file.txt",(err,data)=>{
//     if(err){
//         console.log("err",err)
//     }
//     console.log(data.toString())
// })



function readFile(file,callback){
    console.log("reading statred")
    callback("err","data")
}
readFile('file.txt',function(err,data){
    // console.log("data")
    if(err){
    console.log("err",err)
    }
    console.log("data")
})