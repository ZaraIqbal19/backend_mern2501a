var express = require('express')
var server = express()
require('dotenv').config()
var {MongoClient} =require('mongodb')
var mongoserver = new MongoClient(process.env.MONGO_URL)
server.get('/dashboard',async(req,res) => {
    res.json({"Message":"Hello World"})
})


server.listen(process.env.PORT)