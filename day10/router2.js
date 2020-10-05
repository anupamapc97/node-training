var express=require('express')
var id=express()
var router=express.Router()
var bodyParser=require('body-Parser')
id.use(bodyParser.json())

var employeeRoute=require('./stdroute.js')
id.use('/url',employeeRoute)

id.listen(3500)