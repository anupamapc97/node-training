// function f1(){
//     setTimeout({
//         console.log("f1")
//     },2000)
// }
function f1(callback){
        setTimeout(function(){
            console.log("f1")
            callback()
        },2000)
    }
function f2(){
    console.log("f2")
}
function f3(){
    console.log("f3")

}
// f1()
// f2()
// f3()
f1(function(){
    f2()
    f3() 
})