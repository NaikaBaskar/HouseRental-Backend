const express= require("express")
const app=express();

const {validateHousesOwned} = require('../validators/housesOwnedValidator')
const {add,getHousesOwned,getHouseOwned,updateHouseOwned,deleteHouseOwned,getHousesOwnedByOwner,updateHousesOwnedByOwner,deleteHousesOwnedByOwner,getHousesOwnedByTenant,updateHousesOwnedByTenant,deleteHousesOwnedByTenant,confirmedHouses,pendingHouses,FilledHouses,RequestedHouses,getFilledHouses} = require('../controllers/housesOwnedController')

app.post('/add',validateHousesOwned,add)
app.get('/getHousesOwned',getHousesOwned)
app.get('/getFilledHouses',getFilledHouses)
app.put('/updateHouseOwned/:houseId',updateHouseOwned)
app.get('/getHouseOwned/:houseId',getHouseOwned)
app.delete('/deleteHouseOwned/:houseId',deleteHouseOwned)
app.put('/updateHousesOwnedByOwner/:ownerId',updateHousesOwnedByOwner)
app.get('/getHousesOwnedByOwner/:ownerId',getHousesOwnedByOwner)
app.delete('/deleteHousesOwnedByOwner/:ownerId',deleteHousesOwnedByOwner)
app.put('/updateHousesOwnedByTenant/:tenantId',updateHousesOwnedByTenant)
app.get('/getHousesOwnedByTenant/:tenantId',getHousesOwnedByTenant)
app.delete('/deleteHousesOwnedByTenant/:tenantId',deleteHousesOwnedByTenant)
app.get('/confirmedHouses/:tenantId',confirmedHouses)
app.get('/pendingHouses/:tenantId',pendingHouses);
app.get('/requestedHouses/:ownerId',RequestedHouses)
app.get('/filledHouses/:ownerId',FilledHouses);

module.exports=app