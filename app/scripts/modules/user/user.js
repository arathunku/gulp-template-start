'use strict';

require('angular');
require('angular-ui-router');

require('./settings/settings.js');

var UserModule = angular.module('user', [
  'ui.router',
  'user.settings'
]);


UserModule.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('user', {
    url: '/user',
    controller: 'UsersController',
    template: require('./users.tpl.jade')()
  });
}]);

UserModule.controller('UsersController', require('./usersController.js'));
