const express=require("express");

const app=express();

// const {getOwners} = require('../services/ownerService');

const {validateOwner} = require("../validators/ownerValidator");

const {add,getOwners,getOwner,updateOwner,deleteOwner,login,getOwnerByMobile,changePassword} = require('../controllers/ownerController');



app.post('/login',login)

app.post('/signup',add);

app.get('/getOwners',getOwners);

app.get('/getOwner/:ownerId',getOwner);

app.put('/updateOwner/:ownerId',updateOwner);

app.put('/changePassword',changePassword)

app.delete('/deleteOwner/:ownerId',deleteOwner);

app.get('/getOwnerByMobile/:mobile',getOwnerByMobile);

module.exports=app;