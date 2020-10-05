var express=require('express');
var id=express();
var router=express.Router();

router.get('/getdetails',function(req,res){
    res.send("get success")
})
router.post('/',function(req,res){
    res.send("post success")
})
id.use('/student',router)
id.listen(3600)