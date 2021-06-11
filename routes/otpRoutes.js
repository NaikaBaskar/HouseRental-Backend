const express = require("express")
const app= express()
var cors = require('cors');
app.use(cors())
// require('dotenv/config');

// require('dotenv').load();
require('dotenv').config('./.env');


const accountSid = "AC66936dfd6d62a127b795acd9d7195b56";
const authToken = "1e3cfff904d609bc47e751fe771ef052"
console.log("Before "+accountSid+" "+authToken)
const client = require('twilio')(accountSid, authToken);
console.log("after" + accountSid+" "+authToken)



app.post('/create', (req, res) => {
    console.log('Task post method ');
    client.verify.services.create({code_length: 4,do_not_share_warning_enabled: true,friendlyName: 'House Rental PlatForm'})
    .then(service => {console.log("send "+service.sid);
                        });
  });


  app.post('/sendCode', (req, res) => {
    console.log("sendcode "+req.body.mobile);
    client.verify.services('VA0187c94c30ca38151c09cbb4033048eb')
             .verifications
             .create({to: req.body.mobile, channel: 'sms'})
             .then(verification => {
              console.log("verify "+verification);
              console.log(verification.sid);
              res.send(JSON.stringify({ success: true, msg: "sent" }))
            }).catch(err =>{
              res.send(JSON.stringify({ success: false, msg: "failed" }))
            });
  });

   
  app.post('/verifyCode', (req, res)   =>{
    console.log("code "+req.body.code);
    console.log("verifycode "+req.body.mobile);
    client.verify.services('VA0187c94c30ca38151c09cbb4033048eb')
        .verificationChecks
        .create({to: req.body.mobile, code: req.body.code})
        .then(verification_check => { 
          console.log(verification_check.status)
          if(verification_check.status === "pending"){
            res.send(JSON.stringify({ success: false , msg: "pending"}))
          }else{
            res.send(JSON.stringify({ success: true , msg:"approved"}))
          }
          
      }).catch(err => {
         res.send(JSON.stringify({ success: false , msg: "pending"}))
      })

  });

module.exports= app