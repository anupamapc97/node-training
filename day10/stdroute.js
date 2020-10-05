var express=require('express')
var router=express.Router()
var employee=[]
router.get('/',function(req,res){
    // res.send("this is node js")
    res.send(employee)
})
router.post('/',function(req,res){
    res.send("this is to show ")
    employee.push(req.body)
})

router.put('/1',function(req,res){
    console.log(req.body)
    employee.forEach(result=>{
        if(result.empid==req.body.empid){
            result.name=req.body.name
        }
    })
    res.send(req.body.id)
})
router.put('/:name',function(req,res){
    console.log(req.body)
    employee.forEach(result=>{
        if(result.name==req.params.name){
            result.id=req.body.id
        }
    })
    res.send(req.body.id)
})
// id.delete('/url/:empid',)
router.all('/giveall',function(req,res){
    res.send("all works")
})
module.exports=router