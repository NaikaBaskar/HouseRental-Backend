const express=require("express");
const bp=require("body-parser")
var cors = require('cors')

const app=express();
app.use(bp.json())
app.use(cors());

const ownerRoutes = require('./ownerRoutes')
const tenantRoutes = require('./tenantRoutes')
const houseRoutes = require('./houseRoutes')
const housesOwnedRoutes = require('./housesOwnedRoutes')
const otpRoutes=require('./otpRoutes')

app.use('/owner',ownerRoutes);
app.use('/tenant',tenantRoutes);
app.use('/house',houseRoutes);
app.use('/housesOwned',housesOwnedRoutes);
app.use('/otp',otpRoutes);

module.exports=app;