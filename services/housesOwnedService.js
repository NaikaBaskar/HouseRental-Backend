const {model} = require('mongoose')
const houseOwned = require('../models/housesOwnedModel')
const owner=require('../models/ownersModel');
const house = require('../models/houseModel')
const tenant = require('../models/tenantsModel')

const addHouseOwned = async(req) =>{
    // console.log(req)
    const tId=req.body.tenantId
    const oId=req.body.ownerId
    const hId=req.body.houseId
    const ans1=await tenant.findOne({tenantId:tId})
    const ans2=await owner.findOne({ownerId:oId})
    const ans3=await house.findOne({houseId:hId})

    if(ans1!=null && ans2!=null && ans3!=null)
    {
        const houseOwnedObj=new houseOwned ({
            houseId :req.body.houseId,
            ownerId:req.body.ownerId,
            tenantId:req.body.tenantId,
            status:req.body.status
        })

        var ans=await houseOwnedObj.save().then((result) =>{
            return result
        }).catch((error) =>{
            console.log(error)
            return -1
        })
        return ans;
    }
    else
    {
        if(ans1==null)
            console.log("TenantId not exists");
        if(ans2==null)
            console.log("owner not exists");
        if(ans3==null)
            console.log("house not exists");
        return -1;

    }

}


const getHousesOwnedDetails = async(req) =>{
    const ans=await houseOwned.find()
    var ids=[]
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    // console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    // console.log(ans2.length)
    let i=0
    for(i=0;i<ans2.length ;i++)
    {
        // console.log(ans[i].tenantId)
        ans2[i].tenantId=ans[i].tenantId
        console.log(ans2[i].tenantId)
    }
    console.log(ans2.length)
    if(ans2.length==0)
        return -1;
    return ans2;
}


const getHouseOwnedById = async (req) =>{
    const id=req.params.houseId
    const output=await houseOwned.findOne({houseId:id})
    return output
}

const deleteHouseOwnedDetails = async (req) =>{
    const id = req.params.houseId
    var output=await houseOwned.deleteOne({houseId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })

}

const updateHouseOwnedDetails = async (req) =>{
    const id=req.params.houseId
    const houseOwnedObj= { $set :{
        houseId :req.body.houseId,
        ownerId:req.body.ownerId,
        tenantId:req.body.tenantId,
        status:req.body.status

    }}

   await houseOwned.updateOne({houseId:id},houseOwnedObj,function(err,result){
       if(err) throw err
       return houseOwnedObj
   })

}
const getHousesOwnedByOwnerId = async (req) =>{
    const id=req.params.ownerId
    const ans=await houseOwned.find({ownerId:id})
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    let i=0
    for(i=0;i<ans2.length ;i++)
    {
        // console.log(ans[i].tenantId)
        ans2[i].tenantId=ans[i].tenantId
        console.log(ans2[i].tenantId)
    }
    console.log(ans2.length)
    return ans2
}

const deleteHousesOwnedByOwnerId = async (req) =>{
    const id = req.params.ownerId
    var output=await houseOwned.deleteMany({ownerId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })

}

const updateHousesOwnedByOwnerId = async (req) =>{
    const id=req.params.ownerId
    const houseOwnedObj= { $set :{
        houseId :req.body.houseId,
        ownerId:req.body.ownerId,
        tenantId:req.body.tenantId,
        status:req.body.status

    }}

   await houseOwned.updateMany({ownerId:id},houseOwnedObj,function(err,result){
       if(err) throw err
       return houseObj
   })

}

const getHousesOwnedByTenantId = async (req) =>{
    const id=req.params.tenantId
    const ans=await houseOwned.find({tenantId:id})
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    let i=0
    for(i=0;i<ans2.length ;i++)
    {
        // console.log(ans[i].tenantId)
        ans2[i].tenantId=ans[i].tenantId
        console.log(ans2[i].tenantId)
    }
    console.log(ans2.length)
    return ans
}

const deleteHousesOwnedByTenantId = async (req) =>{
    const id = req.params.tenantId
    var output=await houseOwned.deleteMany({tenantId:id},function(err,result) {
        if(err) throw err
        else
        console.log("Details Deleted")
    })

}

const updateHousesOwnedByTenantId = async (req) =>{
    const id=req.params.tenantId
    const houseOwnedObj= { $set :{
        houseId :req.body.houseId,
        ownerId:req.body.ownerId,
        tenantId:req.body.tenantId,
        status:req.body.status

    }}

   await houseOwned.updateMany({tenantId:id},houseOwnedObj,function(err,result){
       if(err) throw err
       return houseObj
   })

}

const confirmedHousesOfTenant = async(req) =>{
    const id=req.params.tenantId
    const ans=await houseOwned.find({tenantId:id,status:1});
    console.log(ans.length);
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    console.log(ans2.length)
    if(ans2.length==0)
        return -1;
    return ans2;

}

const pendingHousesOfTenant = async(req) =>{
    const id=req.params.tenantId
    // console.log(id)
    const ans=await houseOwned.find({tenantId:id,status:0});
    // console.log(ans.length);
    const ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    // ids.push(7)
    // console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    console.log("res"+ans2.length)
    if(ans2.length==0)
        return -1;
    return ans2;

}
const FilledHousesOfOwner = async(req) =>{
    const id=req.params.ownerId
    const ans=await houseOwned.find({ownerId:id,status:1});
    console.log(ans.length);
    var ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    // console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    const ans3={
        tenantId:'',
        houseId:'',
        cost:'',
        features:'',
        description:'',
        type:'',
        ownerId:'',
        hno:'',
        village:'',
        district:'',
        pin:'',
        houseDocument:'',
        housePic:''
    }
    const ans4=[]
    let i=0
    for(i=0;i<ans2.length;i++)
    {
        console.log(ans2[i].houseId)
        ans3.tenantId=ans[i].tenantId
        ans3.houseId=ans2[i].houseId
        ans3.cost=ans2[i].cost
        ans3.features=ans2[i].features
        ans3.description=ans2[i].description
        ans3.type=ans2[i].type
        ans3.ownerId=ans2[i].ownerId
        ans3.hno=ans2[i].hno
        ans3.village=ans2[i].village
        ans3.district=ans2[i].district
        ans3.pin=ans2[i].pin
        ans3.houseDocument=ans2[i].houseDocument
        ans3.housePic=ans2[i].housePic
        // console.log(ans3)
        ans4.push(ans3)
    }
    // console.log("lll"+ans4.length)
    if(ans2.length==0)
        return -1;
    return ans4;
}

const RequestedHousesOfOwner = async(req) =>{
    const id=req.params.ownerId
    console.log(id)
    const ans=await houseOwned.find({ownerId:id,status:0});
    console.log(ans.length);
    const ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    // ids.push(7)
    console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    const ans3={
        tenantId:'',
        houseId:'',
        cost:'',
        features:'',
        description:'',
        type:'',
        ownerId:'',
        hno:'',
        village:'',
        district:'',
        pin:'',
        houseDocument:'',
        housePic:''
    }
    const ans4=[]
    let i=0
    for(i=0;i<ans2.length;i++)
    {
        console.log(ans2[i].houseId)
        ans3.tenantId=ans[i].tenantId
        ans3.houseId=ans2[i].houseId
        ans3.cost=ans2[i].cost
        ans3.features=ans2[i].features
        ans3.description=ans2[i].description
        ans3.type=ans2[i].type
        ans3.ownerId=ans2[i].ownerId
        ans3.hno=ans2[i].hno
        ans3.village=ans2[i].village
        ans3.district=ans2[i].district
        ans3.pin=ans2[i].pin
        ans3.houseDocument=ans2[i].houseDocument
        ans3.housePic=ans2[i].housePic
        // console.log(ans3)
        ans4.push(ans3)
    }
    console.log("lll"+ans4.length)
    if(ans2.length==0)
        return -1;
    return ans4;

}

const getFilledHousesDetails = async(req) =>{
    const ans=await houseOwned.find({status:1});
    console.log(ans.length);
    const ids=[];
    ans.forEach(h => {
        ids.push(h.houseId);
    });
    // ids.push(7)
    console.log(ids)
    const ans2=await house.find({houseId:{$in:ids}})
    const ans3={
        tenantId:'',
        houseId:'',
        cost:'',
        features:'',
        description:'',
        type:'',
        ownerId:'',
        hno:'',
        village:'',
        district:'',
        pin:'',
        houseDocument:'',
        housePic:''
    }
    const ans4=[]
    let i=0
    for(i=0;i<ans2.length;i++)
    {
        console.log(ans2[i].houseId)
        ans3.tenantId=ans[i].tenantId
        ans3.houseId=ans2[i].houseId
        ans3.cost=ans2[i].cost
        ans3.features=ans2[i].features
        ans3.description=ans2[i].description
        ans3.type=ans2[i].type
        ans3.ownerId=ans2[i].ownerId
        ans3.hno=ans2[i].hno
        ans3.village=ans2[i].village
        ans3.district=ans2[i].district
        ans3.pin=ans2[i].pin
        ans3.houseDocument=ans2[i].houseDocument
        ans3.housePic=ans2[i].housePic
        // console.log(ans3)
        ans4.push(ans3)
    }
    console.log("lll"+ans4.length)
    if(ans2.length==0)
        return -1;
    return ans4;

}



module.exports ={addHouseOwned,getHousesOwnedDetails,getHouseOwnedById,deleteHouseOwnedDetails,updateHouseOwnedDetails,getHousesOwnedByOwnerId,deleteHousesOwnedByOwnerId,updateHousesOwnedByOwnerId,getHousesOwnedByTenantId,updateHousesOwnedByTenantId,deleteHousesOwnedByTenantId,confirmedHousesOfTenant,pendingHousesOfTenant,FilledHousesOfOwner,RequestedHousesOfOwner,getFilledHousesDetails}