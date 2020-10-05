function a(callback){
console.log("inside a")
callback('5')
}
function b(){
console.log("inside b")
 a(function(a){
     console.log(a)
})
}
b()