function camel(a){
    a=a.split(" ")
    for(var i=1;i<a.length;i++){
    a[i]=a[i][0].toUpperCase()+a[i].substr(1)
    }
return a.join("")
}
console.log(camel("hello welcome to the page"))
