var emp=new Array();
emp[0]="1";
emp[1]="3";
emp[2]="2";
emp[3]="5";
for(var i=0;i<emp.length;i++){
    document.write("<br>"+emp[i]+"</br>")
}
var sum=0;
for(var i=0;i<emp.length;i++){
    sum+=emp[i];
}
document.getElementById("block").innerHTML=sum;
