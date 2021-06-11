const {addOwner,getOwnersDetails,getOwnerById,updateOwnerDetails,deleteOwnerDetails,loginOwner,getOwnerByMobileNumber,updatePassword} = require('../services/ownerService');
const add= async(req,res) =>{
    const output=await addOwner(req);
    if(output!=-1)
    {
        res.status(200).json({
            msg:"Inserted",
            code:200
        });
    }
    else
    {
        res.status(400).json({
            msg:"Error in inserting",
            code:400
        })
    }
}


const login = async(req,res) =>{
    const output=await loginOwner(req);
    console.log(output)
    if(output==-1)
    {
        res.status(400).json({
            msg:"Invalid Password",
            code:401
        });
    }
    else if(output==-2)
    {
        res.status(400).json({
            msg:"Invalid User",
            code:402
        });
    }
    else
    {
        res.status(200).json({
            token:output,
            msg:"Logged in",
            code:200
        })
    }
}

const getOwners=async(req,res) => {
    const ans=await getOwnersDetails(req)
    if(ans!=-1)
    {
        res.status(200).json({
            data:ans,
            msg:"Details",
            code:200
        });
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Error in fetching",
            code:400
        })
    }
    
}

const getOwner = async (req,res) =>{
        const output = await getOwnerById(req);
        if(output!=-1)
        {
            res.status(200).json({
                data:output,
                msg:"Details Exists",
                code:200
            });
            console.log(output)
        }
        else
        {
            res.status(400).json({
                data:[],
                msg:"User Does not Exists",
                code:400
            })

        }
   
}

const updateOwner = async(req,res) => {
       const output= await updateOwnerDetails(req);
        // console.log("Details updates");
        if(output!=-1)
        {
            res.status(200).json({
                data:output,
                msg:"Details Updated",
                code:200
            });
            console.log(output)
        }
        else
        {
            res.status(400).json({
                data:[],
                msg:"Not Updated",
                code:400
               
            })
             console.log("Cant be updated")

        }

}

const changePassword = async(req,res) =>{
    const output= await updatePassword(req)
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Password Changed",
            code:200
        });
        console.log(output)
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"Not Updated",
            code:400
           
        })
         console.log("Cant be updated")

    }
}


const deleteOwner = async(req,res) => {
    try{
        await deleteOwnerDetails(req);
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


const getOwnerByMobile = async (req,res) =>{
    const output = await getOwnerByMobileNumber(req);
    if(output!=-1)
    {
        res.status(200).json({
            data:output,
            msg:"Details Exists",
            code:200
        });
        console.log(output)
    }
    else
    {
        res.status(400).json({
            data:[],
            msg:"User Does not Exists",
            code:400
        })

    }

}

module.exports = {add,getOwners,getOwner,updateOwner,deleteOwner,login,getOwnerByMobile,changePassword};