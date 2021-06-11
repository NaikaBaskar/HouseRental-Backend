const validateTenant = (req,res,next) =>{
    const {Name,TenantId,Password} = req.body;
    if(Name== "" || TenantId == "" || Password=="")
    {
        res.status(400).json({
            msg:"Fields cannot be empty"
        })
    }
    else
    {
        next();
    }
}

module.exports={validateTenant};