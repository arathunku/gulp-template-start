'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');

// var concat = require('gulp-concat');
var rev = require('gulp-rev');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var rename = require('gulp-rename');
var browserify   = require('browserify');
// var es6ify       = require('es6ify');  # ES6
var watchify     = require('watchify');
var envify       = require('envify/custom');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');

var browserifyBundle = function(){

  return browserify({
    // Required watchify args
    cache: {},
    packageCache: {},
    fullPaths: true,
    // Specify the entry point of your app
    entries: [config.app('scripts/app.js')],
    // entries: ['./app/scripts/app.js'],
    // Add file extentions to make optional in your requires
    extensions: ['.jade'],
    // Enable source maps!
    debug: config.sourcemaps,
  })
  .transform(require('jadeify'))
  .transform(envify({CONFIG: config}));
};

var gulpBrowserify = function(bundler) {
  return function(){
    // Log when bundlin
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      .pipe(source('app.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulpIf(config.rev || config.uglify, buffer()))
      .pipe(gulpIf(config.uglify, uglify()))
      .pipe(gulpIf(config.rev, rev()))

      .pipe(gulp.dest(config.dist('scripts')))

      .pipe(gulpIf(config.rev, rev.manifest({path: 'scripts.json'})))
      .pipe(gulpIf(config.rev, gulp.dest(config.dist('rev'))));
  };
};

gulp.task('scripts', ['js-clean'], function() {
  return gulpBrowserify(browserifyBundle())();
});

gulp.task('watchify', ['js-clean'], function() {
  var bundler = browserifyBundle();
  var bundle = gulpBrowserify(bundler);

  bundler = watchify(bundler);
  bundler.on('update', bundle);

  return bundle();
});
