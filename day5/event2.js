var ev=require('events');
var em=new ev.EventEmitter();
// const { emit } = require('process');
var MyString = "welcome to javascript"

var numArray=[1,2,34,5,7,8];
var sumOfArray=function sum(){
    var sum=0;
    numArray.forEach(x=>sum+=x)
    console.log(sum)
}
var even=function filterEven(){
    var even=numArray.filter(x=>x%2==0)
    console.log(even)
}
var odd=function filterOdd(){
    var odd=numArray.filter(x=>x%2!=0)
    console.log(odd)
}
var findLength=function len(){
    console.log(MyString.length)
}
var strreplace=function strReplace(){
    console.log("before replace",MyString)
    console.log(MyString.replace('javascript','node js'))
}
em.on("numberFunctions",sumOfArray)
em.addListener("numberFunctions",even)
em.addListener("numberFunctions",odd)
em.addListener("stringFunctions",strreplace)
em.emit('numberFunctions')
em.emit('stringFunctions')
em.removeListener('numberFunctions',odd)
em.emit('numberFunctions')