const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
var nforce  = require('nforce');
var Myglobal = require ('./globals');
var username      = 'kvora2@spdemo5.demo.kv',
password      = 'Khyati@Vora1',
securityToken = '8sIESue8gUzh9E6rphwa1vAFG';

var org = nforce.createConnection({
  clientId: '3MVG9FS3IyroMOh5Oc_W3mUeqNjR0hZvIHkZr.TkWQnAHbUL0sR1NuFy5RnrTyR07B0DQ9CK6.cEZ8EltifTe',
  clientSecret: '6516230232174280544',
  redirectUri: 'https://test.salesforce.com/services/oauth2/success',
  apiVersion: 'v42.0',  // optional, defaults to current salesforce API version
  environment: 'sandbox',  // optional, salesforce 'sandbox' or 'production', production default
  mode: 'single' // optional, 'single' or 'multi' user mode, multi default
});

org.authenticate({ username: username, password: password, securityToken: securityToken }, function(err, resp){
  if(!err) {
    console.log('Access Token: ' + resp.access_token);
    Myglobal.authToken= resp;
    console.log( Myglobal.authToken);
  } else {
    console.log('Error: ' + err.message);
  }
});

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  }
}

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
app.use(cors());


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
