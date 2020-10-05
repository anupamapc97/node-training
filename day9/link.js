var ex=require('express')
var app=ex()
app.get('/welcome',function(req,res){
   res.send("Hello World")
})
app.get('/',function(req,res){
   res.send("Hello everyone")
})
app.get('/getEmployees',function(req,res){
   res.send([{name:"anu"},{name:"niru"}])
})
app.get('/getnumber',function(req,res){
   res.send("100000")
})
app.listen(3500)