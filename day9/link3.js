var ex=require('express')
var a=ex()

var student=[
    {
        id:1,
        name:"anu"
    },
    {
        id:2,
        name:"niru"
    }
]
a.get("/getstudent",function(req,res){
    res.send(student)
})
a.get("/getstudent/:id",function(req,res){
   let std=student.filter(res=>res.id==req.params.id)
    res.send(std)
})
a.listen(3500)