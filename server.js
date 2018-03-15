//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use('/home'+express.static(__dirname+'/home'));
app.use('/register'+express.static(__dirname+'/register'));
app.use('/products'+express.static(__dirname+'/products'));
app.use(express.static(__dirname+ '/'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
