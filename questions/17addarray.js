var a=new Array()
function add(){
    var i=0
    a[i]=document.getElementById("a").value
    i++;
    console.log("element enetered")


}
function printar(){
    var b
    for(var j=0;j<a.length;j++){
        console.log(a[j])
     document.getElementById("ans").innerHTML=a[j]+","
        
    }
    document.getElementById("ans").innerHTML=b
}