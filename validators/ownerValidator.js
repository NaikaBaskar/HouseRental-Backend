const validateOwner = (req,res,next) =>{
    const {name,ownerId,password} = req.body;
    if(name== "" || ownerId == "" || password=="")
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

module.exports={validateOwner};