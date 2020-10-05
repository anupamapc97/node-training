var express = require('express');
var router = express.Router();
var sqlConnect=require('../config/dbconfig')

router.get('/',function(req,res){
    sqlConnect.query("select * from employee",function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
router.post('/',function(req,res){
    let department_id=req.body.depId;
    let manager_id=req.body.mId;
    let employee_name=req.body.name;
    sqlConnect.query("insert into employee values(?,?,?,?)",[null,department_id,manager_id,employee_name],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send("sucess")
        }
        
    })
})
router.put('/:id',function(req,res){
    let id=req.params.id;
    let employee_name=req.body.name;
    sqlConnect.query("update employee value set name=? where id=?",[employee_name,id],function(err,result){
        if(err){
            console.log(err)
        }
        else{
            res.send("sucess")
        }
        
    })
})
router.delete('/:id', function (req, res) {
    let id = req.params.id
    sqlConnect.query("delete from employee where id=?", [id], function (err, result) {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Successfull")
        }
    })
})

module.exports=router