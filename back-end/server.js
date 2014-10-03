'use strict';
var express = require('express');
var config = require('../config/app');
var proxy = require('./proxy');
var serverport = 9000;

var bootstrap = function(){
  var server = express();
  server.use(express.static('./dist'));

  return server;
};

module.exports.start = function(){
  var server = bootstrap();
  if(config.isTest) {
    proxy(server);
  }

  server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist' });
  });

  server.listen(serverport);
  console.info('Express server started at localhost:' + serverport);
};





