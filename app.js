const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health', function (req, res) {
  res.send('Hello World!');
});

app.get('/sleep/:time', function (req, res) {
  setTimeout(function() {
    console.log('Sleeping ' + req.params.time);
    res.send('sleep ' + req.params.time);
  }, req.params.time);
});

app.trace('/trace', function (req, res) {
  res.send('must be empty');
});

//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
