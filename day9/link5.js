var express=require('express')
var bodyParser=require('body-parser')
var id=express();
id.use(bodyParser.json())
id.get("/getdata",function(req,res){
    res.send("anu")
})
var Student=[]
 id.post("/setdata",function(req,res){
    //  res.send("post is working")
     console.log(req.body)
    res.send(req.body)
})
// id.post("/setdata",function(req,res){
//     //  res.send("post is working")
//     console.log(req.body)
//     Student.push(req.body)
//     res.send("done")
// })
id.listen(3500)