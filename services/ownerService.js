const { model } = require('mongoose');
const owner=require('../models/ownersModel');
const house = require('../models/houseModel')
const houseOwned = require('../models/housesOwnedModel')
const fs=require("fs")
const path=require("path")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")


const addOwner = async (req) => {
    // console.log("addowner method");
    const passwd=await bcryptjs.hash(req.body.password,10)
    const ownerObj= new owner({
        name : req.body.name,
        dob:req.body.dob,
        gender:req.body.gender,
        mobile:req.body.mobile,
        email:req.body.email,
        aadhar:req.body.aadhar,
        password:passwd,
        hno:req.body.hno,
        village:req.body.village,
        district:req.body.district,
        pin:req.body.pin
    });

    let ans=await ownerObj.save().then((result) => {
        return result;
    }).catch( (err) => {
        console.log(err)
       return -1;
    });
    console.log(ans)
    return ans;
}

const loginOwner = async(req) =>{
    const mobile=req.body.mobile;
    const passwd=req.body.password
    const owner1=await owner.findOne({mobile:mobile})
    if(owner1!=null)
    {
        if(await bcryptjs.compare(passwd,owner1.password))
        {
            // const token=await generateToken({mobile:mobile})
            // console.log(token)
            // return token;
            console.log("Logged in")
            return 1;
        }
        else
        {
            return -1;
        }
    }
    else
    {
        return -2;
    }
}
const getOwnerById = async (req) => {
    const id=req.params.ownerId;
    var output= await owner.findOne({ownerId:id})
    console.log(id+output)
        return output;
}

const deleteOwnerDetails = async (req) => {
    const id=req.params.ownerId;
    var output= await owner.deleteOne({ownerId:id}, function(err, res) {
        if (err) throw err;
        console.log("Details deleted") });
    var ans=await house.deleteMany({ownerId:id},function(err,result) {
        if(err) throw err
        else
            console.log("Details Deleted")
        })
    const ans2=await houseOwned.deleteMany({ownerId:id},function(err,result) {
        if(err) throw err
        else
          console.log("Details Deleted")
        })
        
}
const getOwnersDetails = async (req) => {
    const ans=await owner.find();
    console.log(ans)
    return ans;
}

const updateOwnerDetails = async (req) => {
    const id=req.params.ownerId;
    // const passwd=await bcryptjs.hash(req.body.password,10)
    var ownerObj= { $set :{
        name : req.body.name,
        dob:req.body.dob,
        gender:req.body.gender,
        mobile:req.body.mobile,
        email:req.body.email,
        aadhar:req.body.aadhar,
        password:req.body.password,
        hno:req.body.hno,
        village:req.body.village,
        district:req.body.district,
        pin:req.body.pin
    }};
    const ans=await owner.updateOne({ownerId:id}, ownerObj, function(err, res) {
        if (err) throw err;
        return ownerObj;
      });
      if(ans.n===0)
        return -1;
      else
      {
         const ans2=await owner.findOne({ownerId:id})
         return ans2;
      }
      return -1;

}

const updatePassword = async (req) =>{
    const id=req.body.mobile
    const user=await owner.findOne({mobile:id})
    const passwd=await bcryptjs.hash(req.body.password,10)
    const ownerObj= { $set :{
        name : user.name,
        dob:user.dob,
        gender:user.gender,
        mobile:user.mobile,
        email:user.email,
        aadhar:user.aadhar,
        password:passwd,
        hno:user.hno,
        village:user.village,
        district:user.district,
        pin:user.pin
    }}

   const ans=await owner.updateOne({mobile:id},ownerObj,function(err,result){
       if(err) throw err
       return ownerObj
   })
   if(ans.n===0)
        return -1
    return ans

}


// const generateToken = async(payload) =>{
//     return await jwt.sign(payload,"Owner",{expiresIn:100})
// }

const getOwnerByMobileNumber = async (req) => {
    const ph=req.params.mobile;
    var output= await owner.findOne({mobile:ph})
    // console.log(id+output)
        return output;
}


module.exports={addOwner,getOwnersDetails,getOwnerById,updateOwnerDetails,deleteOwnerDetails,loginOwner,getOwnerByMobileNumber,updatePassword};