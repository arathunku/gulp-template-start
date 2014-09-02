'use strict';

var express = require('express');
var livereload = require('connect-livereload');
var livereloadport  = 35729;
var serverport      = 9000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist' });
});

server.listen(serverport);
require('tiny-lr')();

console.info('Express server started at localhost:' + serverport);

