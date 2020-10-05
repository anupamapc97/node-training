var express=require('express')
var id=express()
id.get('/url',function(req,res){
    res.send("this is node js")
})
id.listen(3500)