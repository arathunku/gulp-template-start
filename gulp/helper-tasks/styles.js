'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');

var gulpIf = require('gulp-if');
var buffer = require('gulp-buffer');
var rev = require('gulp-rev');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('styles', ['css-clean'], function() {
  return gulp.src(config.app('/styles/*.scss'))
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulpIf(config.minifycss, minifycss()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulpIf(config.rev, buffer()))
    .pipe(gulpIf(config.rev, rev()))

    .pipe(gulp.dest(config.dist('/styles')))

    .pipe(gulpIf(config.rev, rev.manifest({path: 'styles.json'})))
    .pipe(gulpIf(config.rev, gulp.dest(config.dist('rev'))));
});
