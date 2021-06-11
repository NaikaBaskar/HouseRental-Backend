const validateHousesOwned = (req,res,next) =>{
    const {houseId} = req.body.houseId;
    if(houseId== "")
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

module.exports={validateHousesOwned};