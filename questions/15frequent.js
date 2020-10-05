function func(){
    // var a=[3,"a","a","a",2,3,"a",3,"a",2,4,9,3]
    var a=new  Array()
    a=document.getElementById("a").value
    console.log(a)
var b=0
var c=1
var temp
for(var i=0;i<a.length;i++){
    for(var j=i;j<a.length;j++){
        if(a[i]==a[j]){
            b++
        }}
        if(b>c)
        {c=b;
        temp=a[i]}
    
    b=0
}document.getElementById("ans").innerHTML=temp+"repeated"+""+c+""+"times"
}
// console.log(temp,"repeated",c,"times")