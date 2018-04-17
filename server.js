const path = require('path');
const express = require('express');
const app = express();
var cors = require('cors');
//var nforce  = require('nforce');
//const history = require('connect-history-api-fallback');
//var proxy = require('http-proxy-middleware');
//var router = express.Router();

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
  origin: 'http://localhost:4200',
  credentials : true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(forceSSL());
app.use(history());
app.use(cors(corsOptions));

/* app.options("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.set('Allow','POST');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.send(200);

});*/

//app.use(cors.permission);

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);



