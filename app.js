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
  var resp = 'TRACE /trace HTTP/1.1\n'
  for (var i in req.headers) {
    resp = resp + i + ': ' + req.headers[i] + '\n'
  }
  resp = resp + '\n'
  res.send(resp);
});

app.put('/put', function (req, res) {
    let resp = 'PUT /put HTTP/1.1\n';
    resp = resp + 'put request was sucessful.\n';
    res.send(resp);
});

app.put('/sleep/:time', function (req, res) {
  setTimeout(function() {
    console.log('Sleeping ' + req.params.time);
    res.send('put request slept for ' + req.params.time);
  }, req.params.time);
});

app.head('/head', function (req, res) {
    //head has no response
});

app.head('/sleep/:time', function (req, res) {
  setTimeout(function() {
    console.log('Sleeping ' + req.params.time);
    //head has no response
  }, req.params.time);
});

app.delete('/delete', function (req, res) {
    let resp = 'DELETE /delete HTTP/1.1\n';
    resp = resp + 'delete request was sucessful.\n';
    res.send(resp);
});

app.delete('/sleep/:time', function (req, res) {
  setTimeout(function() {
    console.log('Sleeping ' + req.params.time);
    res.send('delete request slept for ' + req.params.time);
  }, req.params.time);
});

app.options('/options', function (req, res) {
    let resp = 'OPTIONS /options HTTP/1.1\n';
    resp = resp + 'options request was sucessful.\n';
    res.send(resp);
});

app.options('/sleep/:time', function (req, res) {
  setTimeout(function() {
    console.log('Sleeping ' + req.params.time);
    res.send('options request slept for ' + req.params.time);
  }, req.params.time);
});
//app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
//});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
