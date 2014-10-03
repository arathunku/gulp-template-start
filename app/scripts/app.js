'use strict';
// TESTING PURPOSES, REMOVE
if(typeof global.app === 'undefined') {
  global.app = {};
}
// var _ = require('underscore');

// for angular modularity
require('angular');
require('angular-ui-router');
require('angular-resource');

require('./modules/user/user.js');

var app = global.app;

app = require('angular').module('app', [
  'ngResource',
  'ui.router',
  'user'
]);

require('./config.js');
