const  mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment")

// const connection = mongoose.createConnection('mongodb://localhost/Project')
const connection = mongoose.createConnection('mongodb+srv://Baskar:baskar123@cluster0.v1ofw.mongodb.net/Project?retryWrites=true&w=majority')


autoIncrement.initialize(connection)

const tenantSchema=mongoose.Schema({
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

tenantSchema.plugin(autoIncrement.plugin,{model:'tenants',field:'tenantId'})
const tenants= mongoose.model("tenants",tenantSchema);

module.exports = tenants;

