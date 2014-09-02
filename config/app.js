'use strict';
var path = require('path');
var _ = require('underscore');

var SUPPORTED_ENVS = ['development', 'staging', 'production'];

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

var defaultConfig = {
  // build config
  appPath: appPath,
  distPath: distPath,
  app: pathCreator(appPath),
  dist: pathCreator(distPath),
  debug: true,
  isDevelopment: true,
  isProduction: false,
  sourcemaps: true,
  rev: false,
  uglify: false,
  minifycss: true,
  htmlmin: true,
  autoreload: true,

  hosts: {
    api: 'hosts.api'
  }
};

module.exports = _.extend(defaultConfig, getEnvConfig());
