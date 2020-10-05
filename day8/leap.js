// function leapyr(){
// var b=document.getElementById("a")
//  var a=parseInt(b)
// var a=1700
// if((a%400==0)){
//     console.log(a)
//      document.getElementById("ans").innerHTML=a+" "+"is a leap year"
// }
// else if((a%100!=0)&&(a%400==0)){
//     console.log(a)
//  document.getElementById("ans").innerHTML=a+" "+"is a leap year"
// }
// }
// leapyr()
//  console.log(a)
var b=document.getElementById("a").value;
function leapyr(){
    // var b=document.getElementById("a").value;
    var a=parseInt(b)
    if((a%400==0)||((a%100!=0)&&(a%400==0))){
     document.getElementById("ans").innerHTML=a+" "+"is a leap year"
    }
    else {
    document.getElementById("ans").innerHTML=a+" "+"is not a leap year"
    }
    }
    // leapyr()
    // console.log(a)