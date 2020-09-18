var ans=0
for(var i=1;i<=10;i++){
    if(i<5){
        ans=ans+i
    }
}
console.log(ans)
document.getElementById("block").innerHTML=ans
function myAlert(){
    debugger
    var confi =confirm("do u want to delete")
    console.log(confi)
    if(confi==true){
        setTimeout(function(){
            alert("delete successfull")
        },3000)
        
    }
    else{
    alert("failed pls try again")
    }

}
function setSec(){
    var myDate=new Date()
    document.getElementById("block").innerHTML=myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds()
}
setInterval(function(){
    setSec()
},1000);