'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback){
  return runSequence('lint',
              ['images', 'styles', 'scripts', 'views'],
              'index',
              callback);
});
