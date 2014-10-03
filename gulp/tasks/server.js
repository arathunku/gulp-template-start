'use strict';
var server = require('../../back-end/server');
var gulp = require('gulp');

gulp.task('server', function() {
  server.start();
});


