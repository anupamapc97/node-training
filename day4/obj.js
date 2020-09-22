var a=1
var b="xyz"
var c=true
var xyz=[1,2,3]
var emp={firstname:"anu",age:20,address:{place:"xyz",pin:123456}}
let company=[
    {firstname:"anu",age:22,address:{place:"xyz",pin:123456}},
    {firstname:"niru",age:21,address:{place:"xy",pin:123400}},
    {firstname:"pama",age:23,address:{place:"xyzo",pin:123897}}
    
]
// console.log(emp)
// console.log(emp.firstname)
// console.log(emp.age)
// console.log(emp.address)
// console.log(emp.address.pin)

// console.log("//////////////////")
// console.log(company[0])
// console.log(company[0].firstname)
// console.log(company[1].age)
// console.log(company[2].address)

// console.log("//////////////////")
// function letex(){
//     var varEx= 20
//     if(varEx==20){
//         let letEx=20
//         console.log(letEx)
//     }
//     //console.log("ans",letEx)
//     //shows error because let is used for local definition
//     console.log("ans",varEx)
// }
// console.log(letex())
company.map(x=>{
    x.age+=10
})
console.log(company)
console.log(company.filter(x=>x.age==32))
// company.splice(0,1)
// console.log(company)
var x=company.splice(0,1)
console.log("removed object",x)
