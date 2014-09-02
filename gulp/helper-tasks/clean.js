'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var clean = require('gulp-clean');

gulp.task('js-clean', function(){
  return gulp.src(config.dist('/scripts/**/*'), {read: false})
    .pipe(clean());
});

gulp.task('css-clean', function(){
  return gulp.src(config.dist('/styles/**/*'), {read: false})
    .pipe(clean());
});

gulp.task('views-clean', function(){
  return gulp.src(config.dist('/views/**/*.html'), {read: false})
    .pipe(clean());
});

gulp.task('images-clean', function(){
  return gulp.src(config.dist('/images/**/*'), {read: false})
    .pipe(clean());
});

