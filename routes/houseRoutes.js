const express = require("express")
const cors=require("cors")
const fs=require("fs")
const path =require("path")
const bp=require("body-parser")
var multer=require("multer")

const app = express()

app.use(cors())
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())
app.set('view engine',"ejs")
require("dotenv").config()
app.use(express.static(__dirname))
var upload=multer({dest:'uploads/'})


const {validateHouse} = require('../validators/housesValidator')
const {add,getHouses,getHouse,deleteHouse,updateHouse,getHousesByOwner,updateHousesByOwner,deleteHousesByOwner,getVacantHouses,getVacantHousesOfOwner} = require('../controllers/housesController')

app.post('/add',upload.fields([{name:"housePic"},{name:"houseDocument"}]),add)
app.get('/getHouses',getHouses)
app.put('/updateHouse/:houseId',upload.fields([{name:"housePic"},{name:"houseDocument"}]),updateHouse)
app.get('/getHouse/:houseId',getHouse)
app.delete('/deleteHouse/:houseId',deleteHouse)
app.put('/updateHousesByOwner/:ownerId',upload.fields([{name:"housePic"},{name:"houseDocument"}]),updateHousesByOwner)
app.get('/getHousesByOwner/:ownerId',getHousesByOwner)
app.delete('/deleteHousesByOwner/:ownerId',deleteHousesByOwner)
app.get('/getVacantHouses',getVacantHouses);
app.get('/getVacantHousesOfOwner/:ownerId',getVacantHousesOfOwner);


module.exports=app;