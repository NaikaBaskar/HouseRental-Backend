const express = require("express")

const app=express()

const {validateTenant} = require('../validators/tenantValidator');

const {login,add,getTenants,getTenant,updateTenant,deleteTenant, getTenantByMobile,changePassword} = require('../controllers/tenantController')


app.post('/login',login)
app.post('/signup',add);
app.get('/getTenants',getTenants)
app.get('/getTenant/:tenantId',getTenant)
app.put('/updateTenant/:tenantId',updateTenant)
app.put('/changePassword',changePassword)
app.delete('/deleteTenant/:tenantId',deleteTenant)
app.get('/getTenantByMobile/:mobile',getTenantByMobile)


module.exports=app;