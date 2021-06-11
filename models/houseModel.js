const  mongoose = require("mongoose");
require('mongoose-double')(mongoose)

var SchemaTypes = mongoose.Schema.Types
const autoIncrement = require("mongoose-auto-increment")

// const connection = mongoose.createConnection('mongodb://localhost/Project')

const connection = mongoose.createConnection('mongodb+srv://Baskar:baskar123@cluster0.v1ofw.mongodb.net/Project?retryWrites=true&w=majority')


autoIncrement.initialize(connection)

const housesSchema=mongoose.Schema({
    cost : {
        // type:SchemaTypes.Double,
        type:Number,
        required:true
    },
    features : {
        type:String,
        required:true,
        trim:true
    },
    houseDocument:{
        // data:Buffer,
        // contentType : String,
        type:String
    },
    housePic:{
        // data:Buffer,
        // contentType : String,
        type:String
        
    },
    description : {
        type:String,
        trim:true,
        required:true
    },
    type : {
        type:String,
        required:true
    },
    ownerId :{
        type:Number,
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

housesSchema.plugin(autoIncrement.plugin,{model:'houses',field:'houseId'})
const houses= mongoose.model("houses",housesSchema);

module.exports = houses;

