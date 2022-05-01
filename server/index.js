const express = require("express");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const crypto = require('crypto');
const jwt_decode =require("jwt-decode");

const PORT = process.env.PORT || 3001;

const app = express();
let txnId = "",token;
let binarylarge="";
const XMLHttpRequest = require('xhr2');

app.post("/api",jsonParser,async (req,res) => {
    let body = {
      "mobile" : req.body.number
  }
    await beforeOtp(body);
    res.json({ message: txnId });
  });


  app.post("/validateOtp",jsonParser,async (req,res) => {
    console.log("going in server2")
    await afterOtp(req.body.otp);

      res.json({ message: "binarylarge" });
    });
function beforeOtp(body)
{
  return new Promise(async (resolve, reject) => {
    try{
  const req1 = new XMLHttpRequest();
  req1.addEventListener("load",function(){
      let Txnobj = JSON.parse(req1.responseText);
      txnId = Txnobj.txnId;
      if(txnId)resolve(txnId);
      else reject("null tnc")
    });
  req1.open("POST","https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP");
  req1.setRequestHeader("Content-type","application/json");
  req1.send(JSON.stringify(body));
    }
    catch(err)
    {
      console.log("err")
    }
  })
}

function afterOtp(otp)
{
  return new Promise(async (resolve, reject) => {
    try{
  var req2 =  new XMLHttpRequest();
  let hashotp=crypto.createHash('sha256').update(otp).digest('hex');
  hashotp=hashotp.toLowerCase();
  let body2 = {
      "otp" : hashotp,
      "txnId" :txnId
  }
  let benf="";
  req2.addEventListener("load",function(){
    let tokenobj=JSON.parse(req2.responseText)
    token=tokenobj.token;
    let decoded = jwt_decode(token);
    let benf_no=decoded.beneficiary_reference_id
    benf=benf_no.toString()
  });
    console.log("1-------")
    console.log('----',benf)
  req2.open("POST","https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP");
  req2.setRequestHeader("Content-type","application/json");
  req2.send(JSON.stringify(body2));
  

let req3 =  new XMLHttpRequest();
req3.addEventListener("load",function(){
  binarylarge=req3.responseText
  // const file = new Blob(
  //   [binarylarge], 
  //   {type: 'application/pdf'});
  // const fileURL = URL.createObjectURL(file);
  // window.open(fileURL);
});//34670154856214
console.log("2----------",token)
console.log('benf----',benf)
req3.open("GET","https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id="+benf);
req3.setRequestHeader('Authorization', 'Bearer ' + token);
req3.setRequestHeader("Content-type","application/pdf");
req3.send();

    }
    catch(err)
    {
      console.log(err)
    }
  })
}



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); 


