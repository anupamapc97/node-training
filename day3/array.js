// var myarray=[12,13,45,10]
// var sumarray=0
// for(var i=0;i<myarray.length;i++){
//     sumarray+=myarray[i]
// }
//  console.log(myarray[1])
//  console.log("length "+myarray.length)
//  document.getElementById("block").innerHTML=sumarray

var emp=new Array();
emp[0]="anu";
emp[1]="name";
for(var i=0;i<emp.length;i++){
    document.write("<br>"+emp[i]+"</br>")
}
 pushData=()=>{
    emp.push("same")
    printData()
}
function printData(){
    for(var i=0;i<emp.length;i++){
        console.log(emp[i])
    }
}
function popData(){
    emp.pop()
    printData()
}