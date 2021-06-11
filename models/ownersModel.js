const  mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment")

// const connection = mongoose.createConnection('mongodb://localhost/Project')
const connection = mongoose.createConnection('mongodb+srv://Baskar:baskar123@cluster0.v1ofw.mongodb.net/Project?retryWrites=true&w=majority')



autoIncrement.initialize(connection)

const ownerSchema=mongoose.Schema({
    name : {
        type:String,
        trim:true,
        required:true
    },
    dob : {
        type:Date,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    mobile : {
        type:Number,
        required:true,
        unique:true
    },
    email :{
        type:String,
        required:true
    },
    aadhar:{
        type:Number,
        required:true,
        unique:true
    },
    password : {
        type:String,
        trim:true,
        required:true
    },
    hno: {
        type:String,
        trim:true,
        required:true
    },
    village: {
        type:String,
        trim:true,
        required:true
    },
    district : {
        type:String,
        trim:true,
        required:true
    },
    pin :{
        type:Number,
        required:true
    }
})

ownerSchema.plugin(autoIncrement.plugin,{model:'owners',field:'ownerId'})
const owners= mongoose.model("owners",ownerSchema);

module.exports = owners;

// OwnerId :1,
// Name:Baskar,
// Dob:2000-02-02,
// Gender:Male,
// Mobile:7654321123,
// Email:abc@gmail.com,
// Password:password,
// Hno:123,
// Village:RPT,
// District:KMR,
// Pin:987621