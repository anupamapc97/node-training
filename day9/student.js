var express=require('express')
var bodyParser=require('body-parser')
var id=express();
id.use(bodyParser.json())
var Student=[]
 id.get("/student",function(req,res){
    res.send(Student)
})
id.post("/student",function(req,res){
    Student.push(req.body)
    res.send("done")
})
id.put("/student/:id",function(req,res){
    res.send(req.params.id)
})
id.put("/student/:id",function(req,res){
    console.log(req.body)
    Student.forEach(result=>{
        if(result.id==req.params.id){
            result.name=req.body.name
        }
    })
})
id.delete("/student/:id",function(req,res){
    Student.forEach((result,key)=>{
       if(result.id==req.params.id){
        Student.splice(key,1)
       }
       req.send("done")
    })

})
id.all
id.listen(3500)