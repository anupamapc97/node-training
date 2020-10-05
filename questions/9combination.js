function str(){
    // var a=document.getElementById("str").value;
     var a="dog"
     var b=a.split('')
     console.log(b)
     var c=new Array()
     var x=new Array()
     for(var i=0,j=b.length;i<(b.length-1),j>0;i++,j--){
        for(var k=0;k<i;k++){
            x[i]=b[k]+b[k+1]
        //  c[i]=b[i]
        //  x[i]=b[j]
        //  c[i]=b[i]+b[j]
     }
    c[i]=x[i]}
     console.log(c)
    // var b=a.charAt(0).toLowerCase()+a.slice(1)
    // document.getElementById("ans").innerHTML=b
}
str()