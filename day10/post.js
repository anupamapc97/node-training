var express=require('express')
var id=express();
id.get("/getdata",function(req,res){
    res.send("anu")
})
id.post("/setdata",function(req,res){
    res.send("post is working")
})
id.listen(3000)