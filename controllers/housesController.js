const {addHouse,getHousesDetails,getHouseById,deleteHouseDetails,updateHouseDetails,getHousesByOwnerId,updateHousesByOwnerId,deleteHousesByOwnerId,getVacantHousesDetails,getVacantHousesOfOwnerDetails} = require('../services/houseService')

const add = async (req,res) =>{
    const output = await addHouse(req)
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


const getHouses = async (req,res) => {
    const output = await getHousesDetails(req)
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

const getHouse = async(req,res) =>{
    const output= await getHouseById(req);
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

const updateHouse = async(req,res) =>{
    const output= await updateHouseDetails(req)
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

const deleteHouse = async(req,res) => {
    try{
        await deleteHouseDetails(req);
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
const getHousesByOwner = async(req,res) =>{
    const output= await getHousesByOwnerId(req);
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

const updateHousesByOwner = async(req,res) =>{
    const output= await updateHousesByOwnerId(req)
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

const deleteHousesByOwner = async(req,res) => {
    try{
        await deleteHousesByOwnerId(req);
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


// const deleteHouseByOwnerId = async(req,res) =>{

// }

// const getHouseByOwnerId = async(req,res) =>{

// }
const getVacantHouses = async (req,res) => {
    const output = await getVacantHousesDetails(req)
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
const getVacantHousesOfOwner = async (req,res) => {
    const output = await getVacantHousesOfOwnerDetails(req)
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


module.exports={add,getHouses,getHouse,deleteHouse,updateHouse,getHousesByOwner,updateHousesByOwner,deleteHousesByOwner,getVacantHouses,getVacantHousesOfOwner}