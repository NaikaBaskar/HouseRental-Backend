const {model} = require('mongoose')
const tenant = require('../models/tenantsModel')
const houseOwned = require('../models/housesOwnedModel')
const fs=require("fs")
const path=require("path")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")



const addTenant = async(req) =>{
    const passwd=await bcryptjs.hash(req.body.password,10)
    const tenantObj= new tenant({
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

    var ans =await tenantObj.save().then(result =>{
        return result;
    }).catch((err) => {
        console.log(err)
        return -1;
    })
    return ans
}


const getTenantsDetails =async (req) =>{
   const ans=await tenant.find()
   return ans;
}

const getTenantById = async (req) =>{
    const id=req.params.tenantId
    const output=await tenant.findOne({tenantId:id})
    return output
}

const deleteTenantDetails = async (req) =>{
    const id = req.params.tenantId
    var output=await tenant.deleteOne({tenantId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })
    const ans2=await houseOwned.deleteMany({tenantId:id},function(err,result) {
        if(err) throw err
        else
          console.log("Details Deleted")
        })

}

const updateTenantDetails = async (req) =>{
    const id=req.params.tenantId
    // const passwd=await bcryptjs.hash(req.body.password,10)
    const tenantObj= { $set :{
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
    }}

   const ans=await tenant.updateOne({tenantId:id},tenantObj,function(err,result){
       if(err) throw err
       return tenantObj
   })
   if(ans.n===0)
        return -1
    else
      {
         const ans2=await tenant.findOne({tenantId:id})
         return ans2;
      }
    return -1;

}
const updatePassword = async (req) =>{
    const id=req.body.mobile
    const user=await tenant.findOne({mobile:id})
    const passwd=await bcryptjs.hash(req.body.password,10)
    const tenantObj= { $set :{
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

   const ans=await tenant.updateOne({mobile:id},tenantObj,function(err,result){
       if(err) throw err
       return tenantObj
   })
   if(ans.n===0)
        return -1
    return ans

}


const loginTenant = async(req) =>{
    const mobile=req.body.mobile;
    const passwd=req.body.password
    const tenant1=await tenant.findOne({mobile:mobile})
    if(tenant1!=null)
    {
        if(await bcryptjs.compare(passwd,tenant1.password))
        {
            // const token=await generateToken({mobile:mobile})
            // console.log(token)
            // return token;
            console.log("Logged in")
            return 1
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

const getTenantByMobileNumber = async (req) => {
    const ph=req.params.mobile;
    var output= await tenant.findOne({mobile:ph})
    // console.log(id+output)
        return output;
}

// const generateToken = async(payload) =>{
//     return await jwt.sign(payload,"Tenant",{expiresIn:100})
// }
module.exports={addTenant,getTenantsDetails,getTenantById,deleteTenantDetails,updateTenantDetails,loginTenant,getTenantByMobileNumber,updatePassword}