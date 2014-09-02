'use strict';
var gulp = require('gulp');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');

var refresh = require('gulp-livereload');

gulp.task('watch', ['build'], function() {

  gulp.watch( config.app('/scripts/**/*.js'), [ 'lint' ] );
  gulp.watch( config.app('/styles/**/*.scss'), [ 'styles' ] );
  gulp.watch( config.app('/images/**/*'), [ 'images' ] );
  gulp.watch( config.app('/index.jade'), [ 'index' ] );

  gulp.watch([
    config.app('/views/**/*.jade')
  ],
    [ 'views' ]
  );

  // Notifications(optional) and auto reload
  gulp.watch([
    config.dist('/**/*.html'), // views
    config.dist('/styles/*.min.css'), // styles
    config.dist('/scripts/*.min.js'), // scripts
    config.dist('/images/**/*'), // images
  ],
    function(event) {
      gulp.src(event.path)
        .on('error', handleErrors)
        .pipe(refresh());
        // Uncomment and remove `;` if you're like to receive notification
        // about every  reloaded file
        // .pipe(notify({
        //   title: notifyInfo.title,
        //   message: event.path.replace(__dirname, '').replace(/\\/g, '/') + ' was ' + event.type + ' and reloaded'
        // }));
    });
});
