'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');

var gulpIf = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var jade = require('gulp-jade');
var embedlr = require('gulp-embedlr');
var revCollector = require('gulp-rev-collector');
var addSrc = require('gulp-add-src');

gulp.task('index', [], function() {
  return gulp.src(config.app('/index.jade'))
    .pipe(jade()).on('error', handleErrors)
    .pipe(gulpIf(config.autoreload, embedlr()))

    .pipe(gulpIf(config.htmlmin, htmlmin({ collapseWhitespace: true })))
    .on('error', handleErrors)
    // BUG! gulp.src DOESN'T WORK HERE
    .pipe(gulpIf(config.rev, addSrc(config.dist('/rev/*.json'))))
    .pipe(gulpIf(config.rev, revCollector({
      replaceReved: true
    })))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dist('/')));
});

gulp.task('views', ['views-clean'], function() {
  return gulp.src(config.app('/views/**/*'))
    .pipe(jade())
    .pipe(gulpIf(config.htmlmin, htmlmin({collapseWhitespace: true})))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dist('views/')));
});
