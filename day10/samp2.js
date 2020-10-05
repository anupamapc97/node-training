var express=require('express')
var id=express()
var bodyParser=require('body-Parser')
id.use(bodyParser.json())
var employee=[]
id.get('/url',function(req,res){
    // res.send("this is node js")
    res.send(employee)
})
id.post('/url',function(req,res){
    res.send("this is to show ")
    employee.push(req.body)
})
// id.put('/url',function(req,res){
//     res.send("inside put")
// })
// id.put('/url',function(req,res){
//     console.log(req.body)
//     res.send(req.body)
// })
id.put('/url/1',function(req,res){
    console.log(req.body)
    employee.forEach(result=>{
        if(result.empid==req.body.empid){
            result.name=req.body.name
        }
    })
    res.send(req.body.id)
})
id.put('/url/:name',function(req,res){
    console.log(req.body)
    employee.forEach(result=>{
        if(result.name==req.params.name){
            result.empid=req.body.empid
        }
    })
    res.send(req.body.id)
})
// id.delete('/url/:empid',)
id.all('/giveall',function(req,res){
    res.send("all works")
})
id.listen(3500)