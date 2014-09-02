'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');

var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var pngcrush = require('imagemin-pngcrush');

gulp.task('images', [], function() {
  return gulp.src(config.app('/images/**/*'))
    .pipe(changed(config.dist('/images')))
    .pipe(imagemin(
    {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dist('/images')));
});
