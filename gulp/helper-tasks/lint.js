'use strict';
var gulp = require('gulp');
var config = require('../../config/app');

var jshint = require('gulp-jshint');

// JSHint task
gulp.task('lint', function() {
  return gulp.src([
      config.app('/scripts/**/*.js'),
      // Ignore vendors directory for linting.
      '!' + config.app('/scripts/vendor/**')
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
