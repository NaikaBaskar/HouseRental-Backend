const  mongoose = require("mongoose");


const housesOwnedSchema=mongoose.Schema({
    houseId : {
        type:Number,
        required:true,
        unique:true
    },
    ownerId : {
        type:Number,
        required:true
    },
    tenantId : {
        type:Number,
        required:true
    },
    status:{
        type:Number,
        default:0
    }

    
})
housesOwnedSchema.index({houseId: 1, ownerId: 1,tenantId:1}, { unique: true });

const housesowned= mongoose.model("housesOwned",housesOwnedSchema);

module.exports = housesowned;

