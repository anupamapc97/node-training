function cap(a){
     a=a.split(" ")
    for(var i=0;i<a.length;i++){
    a[i]=a[i][0].toUpperCase()+a[i].substr(1)
    }
return a.join(" ")
}
console.log(cap("hello welcome to the page"))