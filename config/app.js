'use strict';
var path = require('path');
var _ = require('underscore');

var SUPPORTED_ENVS = ['development', 'test', 'staging', 'production'];

var pathCreator = function(base){
  return function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(base);
    return './' + path.join.apply(this, args);
  };
};

var getEnvConfig = function() {
  var env = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

  if(SUPPORTED_ENVS.indexOf(env) === -1) {
    throw new Error(env + ' is not supported');
  }

  return require('./envs/' + env + '.js');
};

var appPath = 'app';
var distPath = 'dist';


// Config on the back-end and front-end
var defaultConfig = {
  isDevelopment: false,
  isStaging: false,
  isTest: false,
  isProduction: false,
  appPath: appPath,
  distPath: distPath,
  app: pathCreator(appPath),
  dist: pathCreator(distPath),
  debug: true,
  sourcemaps: true,
  rev: false, // rev generates hash for dist/* files so they could be cached without a problem
  uglify: false, // js uglify
  minifycss: true, // css minifications
  htmlmin: true, // html minifications
  autoreload: true, // if browser should reload page on changes, it's only used in watch mode
  host: {
    // Locations of API server
    api: 'http://127.0.0.1',
    // Location of front-end
    frontend: 'http://127.0.0.1'
  }
};

module.exports = _.extend(defaultConfig, getEnvConfig());
