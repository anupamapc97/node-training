var ev=require('events');
var em=new ev.EventEmitter();
var numArray=[1,2,3,4,5,6,7,8];
var myString=["hi"]
var myString2=["hello"]
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
var rev=function rever(){
    var rev=numArray.reverse()
    console.log(numArray)
}
var push=function arpush(){
    var push=numArray.push(9)
    console.log(numArray)
}
var pop=function arpop(){
    var pop=numArray.pop()
    console.log(numArray)
}
var con=function conca(){
    var con=myString.concat(myString2)
    console.log(con)
}
em.on("numberFunctions",sumOfArray)
em.addListener("numberFunctions",even)
em.addListener("numberFunctions",odd)
em.addListener("numberFunctions",rev)
em.addListener("numberFunctions",push)
em.addListener("numberFunctions",pop)
em.on("strings",con)
em.emit('numberFunctions')

em.emit('strings')
