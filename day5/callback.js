var maths=30
var physics=30
var english=40
function total(callback){
    setTimeout(()=>{
        callback(maths+physics+english)
    },2000);
    
}
function average(){
    total(function(total){
        console.log(total/3)
    })
}
average()