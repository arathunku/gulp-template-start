'use strict';
var SettingsModule = require('angular').module('user.settings', []);

SettingsModule.controller('SettingsController', require('./settingsController.js'));

SettingsModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('user.settings', {
    url: '/settings',
    template: require('./settings.tpl.jade')(),
    controller: 'SettingsController'
  });
}]);



