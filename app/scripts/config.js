'use strict';

var AppModule = require('angular').module('app');

AppModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
  $stateProvider.state('app', {
    url: '/',
    template: '<div><ui-view/></div><div><a ui-sref="user">user</a></div>'
  });

}]);

AppModule.service('Configuration', function(){
  return process.env.CONFIG;
});
