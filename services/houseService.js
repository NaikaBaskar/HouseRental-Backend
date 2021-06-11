const {model} = require('mongoose')
const house = require('../models/houseModel')
const houseOwned = require('../models/housesOwnedModel')
const fs=require("fs");
const owner=require('../models/ownersModel');



const addHouse = async(req) =>{
    // console.log(req)
    var id=req.body.ownerId;
    console.log(id);
    var output= await owner.findOne({ownerId:id}).then(result => {
        return result;
    })
    console.log(output)
    if(output!=null)
    {
    
        var imageBase64=fs.readFileSync(req.files.housePic[0].path,'base64');
        var docBase64=fs.readFileSync(req.files.houseDocument[0].path,'base64')
        const houseObj=new house ({
            cost:req.body.cost,
            features:req.body.features,
            description:req.body.description,
            type:req.body.type,
            ownerId:req.body.ownerId,
            hno:req.body.hno,
            village:req.body.village,
            district:req.body.district,
            pin:req.body.pin,
            houseDocument:docBase64,
            housePic:imageBase64
            // housePic:{
            //     data:fs.readFileSync(req.files.housePic[0].path),
            //     contentType:req.files.housePic[0].mimetype
            // },
            // houseDocument:{
            //     data:fs.readFileSync(req.files.houseDocument[0].path),
            //     contentType:req.files.housePic[0].mimetype
            // }

        })

        var ans=await houseObj.save().then((result) =>{
            return result
        }).catch((error) =>{
            console.log(error)
            return -1
        })
        return ans;
    }
    else
    {
        console.log("OwnerID Dont exists");
        return -1;
    }

}


const getHousesDetails = async(req) =>{
    const ans=await house.find()
    // console.log(ans)
    console.log(ans.length)
    return ans;
}

const getHouseById = async (req) =>{
    const id=req.params.houseId
    const output=await house.findOne({houseId:id})
    return output
}

const deleteHouseDetails = async (req) =>{
    const id = req.params.houseId
    var output=await house.deleteOne({houseId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })
    var output1=await houseOwned.deleteOne({houseId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })

}

const updateHouseDetails = async (req) =>{
    const id=req.params.houseId
    var imageBase64=fs.readFileSync(req.files.housePic[0].path,'base64');
    var docBase64=fs.readFileSync(req.files.houseDocument[0].path,'base64')
    const houseObj= { $set :{
            cost:req.body.cost,
            features:req.body.features,
            description:req.body.description,
            type:req.body.type,
            ownerId:req.body.ownerId,
            hno:req.body.hno,
            village:req.body.village,
            district:req.body.district,
            pin:req.body.pin,
            houseDocument:docBase64,
            housePic:imageBase64
    }}

   await house.updateOne({houseId:id},houseObj,function(err,result){
       if(err) throw err
       return houseObj
   })

}
const getHousesByOwnerId = async (req) =>{
    const id=req.params.ownerId
    const output=await house.find({ownerId:id})
    return output
}

const deleteHousesByOwnerId = async (req) =>{
    const id = req.params.ownerId
    var ans=await house.deleteMany({ownerId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    console.log(ids)
    const ans2=await houseOwned.deleteMany({houseId:{$in:ids}},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })

}

const updateHousesByOwnerId = async (req) =>{
    const id=req.params.ownerId
    var imageBase64=fs.readFileSync(req.files.housePic[0].path,'base64');
    var docBase64=fs.readFileSync(req.files.houseDocument[0].path,'base64')
    const houseObj= { $set :{
        cost:req.body.cost,
        features:req.body.features,
        description:req.body.description,
        type:req.body.type,
        ownerId:req.body.ownerId,
        hno:req.body.hno,
        village:req.body.village,
        district:req.body.district,
        pin:req.body.pin,
        houseDocument:docBase64,
        housePic:imageBase64
    }}

   await house.updateMany({ownerId:id},houseObj,function(err,result){
       if(err) throw err
       return houseObj
   })
}
const getVacantHousesDetails = async(req) =>{
    const ans=await houseOwned.find();
    console.log(ans.length);
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    console.log(ids)
    const ans2=await house.find({houseId:{$nin:ids}})
    console.log(ans2.length)
    return ans2;
}

const getVacantHousesOfOwnerDetails  = async(req) =>{
    const oid=req.params.ownerId
    const ans=await houseOwned.find({status:1});
    console.log(ans.length);
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    console.log(ids)
    const ans2=await house.find({houseId:{$nin:ids},ownerId:oid})
    console.log(ans2.length)
    return ans2;
}


module.exports ={addHouse,getHousesDetails,getHouseById,updateHouseDetails,deleteHouseDetails,getHousesByOwnerId,updateHousesByOwnerId,deleteHousesByOwnerId,getVacantHousesDetails,getVacantHousesOfOwnerDetails}