const {addTenant,getTenantsDetails,getTenantById,deleteTenantDetails,updateTenantDetails,loginTenant,getTenantByMobileNumber,updatePassword} = require('../services/tenantService')

const add = async(req,res) => {
    const output=await addTenant(req)
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

const getTenants = async(req,res) =>{
    const output = await getTenantsDetails(req) 
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

const getTenant = async(req,res) =>{
    const output= await getTenantById(req);
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

const updateTenant = async(req,res) =>{
    const output= await updateTenantDetails(req)
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

const deleteTenant = async(req,res) => {
    try{
        await deleteTenantDetails(req);
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
const login = async(req,res) =>{
    const output=await loginTenant(req);
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

const getTenantByMobile = async (req,res) =>{
    const output = await getTenantByMobileNumber(req);
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

module.exports={add,getTenants,getTenant,updateTenant,deleteTenant,login,getTenantByMobile,changePassword}