const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const bp=require("body-parser")
// require("dotenv").config();
require('dotenv').config('./.env');



const routes=require("./routes/index");

const app=express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.set('view engine','ejs')
const pino = require('express-pino-logger')();
app.use(pino);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())
app.use(cors());



// mongoose.connect(
//    'mongodb://localhost/Project1',
//     {useNewUrlParser:true})
// .then(()=>{console.log("Database connected")});


mongoose.connect(
   'mongodb+srv://Baskar:baskar123@cluster0.v1ofw.mongodb.net/Project?retryWrites=true&w=majority',
    {useNewUrlParser:true})
.then(()=>{console.log("Database connected")});



app.use('/',routes);

app.listen(process.env.PORT || 4000,() => {
    console.log("Listening at 4000");
});
