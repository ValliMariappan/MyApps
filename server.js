const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
var nforce  = require('nforce');
var router = express.Router();

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","https://ang-material.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  next();
}); 
//var oauth;

//forse SSL
const forceSSL = function() {
return function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
}
}
var corsOptions = {
  origin: 'https://ang-material.herokuapp.com',
  credentials : true,
 // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(forceSSL());
app.use(cors(corsOptions));
/*
//salesforce Conn
var username      = 'kvora2@spdemo5.demo.kv',
password      = 'Khyati@Vora1',
securityToken = '8sIESue8gUzh9E6rphwa1vAFG';

//create Conn
var org = nforce.createConnection({
  clientId: '3MVG9FS3IyroMOh5Oc_W3mUeqNjR0hZvIHkZr.TkWQnAHbUL0sR1NuFy5RnrTyR07B0DQ9CK6.cEZ8EltifTe',
  clientSecret: '6516230232174280544',
  redirectUri: 'https://test.salesforce.com/services/oauth2/success',
  apiVersion: 'v42.0',  // optional, defaults to current salesforce API version
  environment: 'sandbox',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single',
  autoRefresh: true // optional, 'single' or 'multi' user mode, multi default
});
console.log('inside server');

//Auth
org.authenticate({ username: username, password: password, securityToken: securityToken }, function(err, resp){
  if(!err) {
    oauth = resp.access_token;
    console.log('Access Token: ' + resp.access_token);
    org.query({query:"select id, name from Account"}, 
      function (err, resp) { 
        console.log('inside query function');
        if(resp.records && resp.records.length){ 
          console.log(resp.records);

        } 
    });
  }
  else{
    console.log('Error: ' + err.message);
  }
});*/

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 8080);
