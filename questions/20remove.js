function removes(a){
for(var i=0;i<a.length;i++){
    if((a[i]=="null")||(a[i]==0)||(a[i]=="false")||(a[i]=="undefined")||(a[i]=="NaN")){
         delete a[i]
}
}
console.log(a)
}
removes(["NaN",0,15,"false",-22,"undefined",47,"null"])