function Longest_Country_name(a){
    // var b=new Array()
    //  b=a
     var l=a[0].length
     for(var i=0;i<a.length;i++){
         if(a[i].length>l){
             l=a[i].length
         }
        }
        var c=a.filter(x=>x.length==l)
    
 console.log(c)
}
Longest_Country_name(["america","idia","china"])