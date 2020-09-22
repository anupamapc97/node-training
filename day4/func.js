 function fn1(){

}
function fn2(){
    return "hi";
}
console.log(fn2())
function fn3(par1){
    var a="hi";
    return a+" "+par1;
}
console.log("function3",fn3('anu'))
function fn4(par2,par3){
    var a="hi"
    return a+" "+par2+" "+par3
}
console.log("function 4",fn4('iam','anu'))
function calc(a,b){
    return a+b
}
console.log(calc(10,20))