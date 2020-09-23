var events=require('events')

var eventEmitter=new events.EventEmitter();
var sample=function f1(){
    console.log("hi")
}
var sample2=function f2(){
    console.log("hello")
}

eventEmitter.on("sampleEx",sample)
eventEmitter.on("sampleEx",sample2)
eventEmitter.emit('sampleEx')
