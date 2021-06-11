const validateHouse = (req,res,next) =>{
    const {cost} = req.body.cost;
    if(cost== "")
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

module.exports={validateHouse};