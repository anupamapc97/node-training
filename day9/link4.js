var express = require('express')
var a = express()

var student = [
    {
        id: 1,
        rollno: 10,
        name: "anu",
        salary: 3000
    },
    {
        id: 2,
        rollno: 30,
        name: "niru",
        salary: 4000
    }
]
a.get("/getstudent", function (req, res) {
    res.send(student)
})
a.get("/getstudent/:id", function (req, res) {
    let std = student.filter(res => res.id == req.params.id)
    res.send(std)
})
// a.get("/getstudent/:id/salary/:salary",function(req,res){
//     res.send(req.params.salary)
// })
a.get("/getstudent/:rollno/salary/:salary", function (req, res) {
    let emp = student.filter(res => res.rollno == req.params.rollno && res.salary > req.params.salary)
    res.send(emp.name)
})
a.get("/revnum/:number", function (req, res) {
    console.log(req.params.number)
    var num = 0
    var n
    var id = req.params.number
    while (parseInt(id) > 0) {
        n = parseInt(id) % 10;
        // console.log(n)
        id =(id) / 10;
        console.log(id)
        num = num * 10 + n
    }
    res.send(num.toString())
    console.log(num)
})
a.listen(3500)