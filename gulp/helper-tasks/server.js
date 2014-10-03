'use strict';
var express = require('express');
var gulp = require('gulp');

gulp.task('server', function() {
  var serverport = 9000;

  // Set up an express server (but not starting it yet)
  var server = express();
  server.use(express.static('./dist'));

  server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist' });
  });

  server.listen(serverport);

  console.info('Express server started at localhost:' + serverport);
});


