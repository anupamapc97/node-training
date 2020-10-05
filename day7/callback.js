function id(a){
    console.log("inside id")
    return "id:001"
}
function name(){
    console.log("inside name")
    var i=id()
    console.log(i)
    console.log("name:anu")
}
name()
// function readme(callback){
//     console.log("inside the read function")
// }