 const fs=require('fs')
// fs.writeFile("anu.txt","welcome to node js",function(err){
//     if(err){
//         console.log("err")
//     }
//     console.log("a new file is created")
//     console.log("new file is created in location"+__dirname)
// })
// fs.appendFile("anu.txt",'welcome to js',function(err){
//     if(err){
//         console.log("err",err)
//     }
//     console.log("done")
// })
fs.unlink("anu.txt",function(err){
    if(err){
        console.log("err",err)
        return
    }
    console.log("deleted successfully")
})