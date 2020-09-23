var ev=require('events'),
em=new ev.EventEmitter();

var f1=()=>{
    console.log("fun1")
}
var f2=()=>{
    console.log("fun2")
    em.emit("first")
}
em.on("first",f1)
em.on("second",f2)
em.emit("second")