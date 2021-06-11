const {addHouseOwned,getHousesOwnedDetails,getHouseOwnedById,updateHouseOwnedDetails,deleteHouseOwnedDetails,getHousesOwnedByOwnerId,updateHousesOwnedByOwnerId,deleteHousesOwnedByOwnerId,getHousesOwnedByTenantId,updateHousesOwnedByTenantId,deleteHousesOwnedByTenantId,confirmedHousesOfTenant,pendingHousesOfTenant,RequestedHousesOfOwner,FilledHousesOfOwner,getFilledHousesDetails} = require('../services/housesOwnedService')

const add = async (req,res) =>{
    const output = await addHouseOwned(req)
    if(output!=-1)
    {
        res.status(200).json({
            msg:"Inserted",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            msg:"Error in Inserting",
            code:400
        })
    }
}


const getHousesOwned = async (req,res) => {
    const output = await getHousesOwnedDetails(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Does not Exists",
            code:400
        })
    }

}

const getHouseOwned = async(req,res) =>{
    const output= await getHouseOwnedById(req);
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Does not Exists",
            code:400
        })
    }
}

const updateHouseOwned = async(req,res) =>{
    const output= await updateHouseOwnedDetails(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details Updated",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Updated",
            code:400
        })
    }

}

const deleteHouseOwned = async(req,res) => {
    try{
        await deleteHouseOwnedDetails(req);
        console.log("Details Deleted");
        res.status(200).json({
            msg:"Details Deleted",
            code:200
        });
    }
    catch(e)
    {
        res.status(400).json({
            msg:"Not Deleted",
            code:400
        })
    }

}
const getHousesOwnedByOwner = async(req,res) =>{
    const output= await getHousesOwnedByOwnerId(req);
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Does not Exists",
            code:400
        })
    }
}

const updateHousesOwnedByOwner = async(req,res) =>{
    const output= await updateHousesOwnedByOwnerId(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details Updated",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Updated",
            code:400
        })
    }

}

const deleteHousesOwnedByOwner = async(req,res) => {
    try{
        await deleteHousesOwnedByOwnerId(req);
        console.log("Details Deleted");
        res.status(200).json({
            msg:"Details Deleted",
            code:200
        });
    }
    catch(e)
    {
        res.status(400).json({
            msg:"Not Deleted",
            code:400
        })
    }

}
const getHousesOwnedByTenant = async(req,res) =>{
    const output= await getHousesOwnedByTenantId(req);
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Does not Exists",
            code:400
        })
    }
}

const updateHousesOwnedByTenant = async(req,res) =>{
    const output= await updateHousesOwnedByTenantId(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details Updated",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Updated",
            code:400
        })
    }

}

const deleteHousesOwnedByTenant = async(req,res) => {
    try{
        await deleteHousesOwnedByTenantId(req);
        console.log("Details Deleted");
        res.status(200).json({
            msg:"Details Deleted",
            code:200
        });
    }
    catch(e)
    {
        res.status(400).json({
            msg:"Not Deleted",
            code:400
        })
    }

}

const confirmedHouses = async(req,res) =>{
    const output= await confirmedHousesOfTenant(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Exits",
            code:400
        })
    }

}

const pendingHouses = async(req,res) =>{
    const output= await pendingHousesOfTenant(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Exits",
            code:400
        })
    }

}


const RequestedHouses = async(req,res) =>{
    const output= await RequestedHousesOfOwner(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Exits",
            code:400
        })
    }

}

const FilledHouses = async(req,res) =>{
    const output= await FilledHousesOfOwner(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Exits",
            code:400
        })
    }
}
const getFilledHouses = async(req,res) =>{
    const output= await getFilledHousesDetails(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details",
            code:200
        })
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Details Not Exits",
            code:400
        })
    }

}

module.exports={add,getHousesOwned,getHouseOwned,updateHouseOwned,deleteHouseOwned,getHousesOwnedByOwner,updateHousesOwnedByOwner,deleteHousesOwnedByOwner,getHousesOwnedByTenant,deleteHousesOwnedByTenant,updateHousesOwnedByTenant,pendingHouses,confirmedHouses,FilledHouses,RequestedHouses,getFilledHouses}