const express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
const bodyparser=require("body-parser")
const prouter = require('./routes/product_router')
var cors = require('cors')
// const brouter = require('./Routes/bowler_router')
const app=express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
mongoose.connect('mongodb://localhost:27017/dataecom')
mongoose.connection.once('open',function(){
    console.log("DB Connection Established")
})
app.listen(5000,function(){
    console.log("EXPRESS RUNNING ON PORT 5000")
})
app.use("/api/v1", prouter)
// app.use("/api/v2", brouter)
