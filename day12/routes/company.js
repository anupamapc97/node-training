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
module.exports=router