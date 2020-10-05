// javascriprt program to get the length of a javascript object
var student={
    name:"David Rayy",
    sclass:"VI",
    rollno:12
};
Object.objsize=function(Myobj){
    var osize=0,key
    for(key in Myobj){
    if(Myobj.hasOwnProperty(key))
    osize++
    }
    return osize
}
var objsize=Object.objsize(student)
console.log('size of the current object:'+objsize)