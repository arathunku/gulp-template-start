'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');
var runSequence = require('run-sequence');

var refresh = require('gulp-livereload');

gulp.task('watch', function() {
  runSequence('lint',
    ['images', 'styles', 'watchify'],
    'index', 'server');

  gulp.watch( config.app('/scripts/**/*.js'), [ 'lint', 'unit' ] );
  gulp.watch( config.app('/styles/**/*.scss'), [ 'styles' ] );
  gulp.watch( config.app('/images/**/*'), [ 'images' ] );
  gulp.watch( config.app('/index.jade'), [ 'index' ] );

  if(config.autoreload) {
    // Notifications(optional) and auto reload
    refresh.listen();

    gulp.watch([
      config.dist('/**/*.html'), // views
      config.dist('/styles/*.min.css'), // styles
      config.dist('/scripts/*.min.js'), // scripts
      config.dist('/images/**/*'), // images
    ]).on('change', refresh.changed).on('error', handleErrors);
  }
    // .pipe(notify({
    //   title: notifyInfo.title,
    //   message: event.path.replace(__dirname, '').replace(/\\/g, '/') + ' was ' + event.type + ' and reloaded'
    // }));
});
