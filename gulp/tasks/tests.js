'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');

var jasmine = require('gulp-jasmine');
var karma = require('karma');
var browserify = require('browserify');
var glob = require('glob');
var source = require('vinyl-source-stream');
var protractor = require('gulp-protractor').protractor;

var createTestBundle = function(name) {
  var bundler = browserify({
    debug: true
  });
  glob.sync(config.app('/scripts/**/*.'+ name +'.js'))
  .forEach(function(file) {
    bundler.add(file);
  });
  return bundler
    .bundle()
    .pipe(source('browserified_'+ name +'_tests.js'))
    .pipe(gulp.dest('./test/browserified'));
};

gulp.task('unit', function () {
  return gulp.src(config.app('/scripts/**/*.unit.js')).pipe(jasmine());
});

gulp.task('browserify-unit-tests', function() {
  return createTestBundle('unit');
});

gulp.task('browserify-e2e-tests', function() {
  return createTestBundle('e2e');
});

gulp.task('karma', ['browserify-unit-tests'], function() {
  karma.server.start({
    configFile: '../../../test/karma.conf.js',
    action: 'run'
  });
});

gulp.task('e2e', ['build', 'browserify-e2e-tests'], function() {
  gulp.src('/test/browserified/browserified_e2e_tests.js')
  .pipe(protractor({
    debug: true,
    configFile: './test/protractor.conf.js',
    args: ['--baseUrl', 'http://127.0.0.1:9000']
  })).on('error', handleErrors);
});
