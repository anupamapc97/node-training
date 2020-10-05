Student=[
    {Id:1,name:"Anu",Class:2,fee_status:{april:1000,may:2000,june:1000,july:2000,august:1000,sep:2000}},
    {Id:2,name:"Niru",Class:3,fee_status:{april:1000,may:2000,june:1000,july:2000,august:1000,sep:2000}},
    {Id:3,name:"anupama",Class:2,fee_status:{april:1000,may:2000,june:1000,july:2000,august:1000,sep:2000}},
    {Id:4,name:"Nirupama",Class:3,fee_status:{april:1000,may:2000,june:1000,july:2000,august:1000,sep:2000}},
]
var sum=0
 Student.forEach(element=>{
     sum+=element.fee_status.august
 }
)
console.log(sum)
         var x=Student.filter(element=>element.Class==3)
        // console.log(x)
        x.map(x=>{
            console.log(x.name)
        })
// document.getElementById("fees").innerHTML="sum of fees collected on August="+sum