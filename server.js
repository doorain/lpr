var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');
var moment = require('moment');
var jwt = require('jwt-simple');
var request = require('request');
var config = require('./config.json');

// var connectionstring = config.connectionString;



app.use(cors());
app.use(bodyParser.json());

app.use(express.static('./public'));

//
// //DATABASE SETUP//----------------------
// var massiveInstance = massive.connectSync({connectionString:connectionstring})
// app.set('db', massiveInstance);
// var db = app.get('db');
// var propertyCtrl = require ('./server/controllers/propertyCtrl')
//////////////////----------------------



app.listen(config.port, function(){
  console.log('This is Mayjor Tom to ground control ' + config.port)
});
