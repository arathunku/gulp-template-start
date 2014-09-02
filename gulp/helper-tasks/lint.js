'use strict';
var gulp = require('gulp');
var config = require('../../config/app');

var jshint = require('gulp-jshint');

// JSHint task
gulp.task('lint', function() {
  return gulp.src(config.app('/scripts/**/*.js'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
