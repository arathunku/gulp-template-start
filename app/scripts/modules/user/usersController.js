'use strict';

var UsersController = function($scope, Configuration, $resource) {
  this.$scope = $scope;
  $scope.users = [];
  $resource(Configuration.host.api + '/v3/users').get({}, function(response){
    $scope.users = response.users;
  });

  $scope.$on('$destroy', this.destroy.bind(this));
  return this;
};

UsersController.prototype.destroy = function() {
  this.$scope = undefined;
};

UsersController.$inject = ['$scope', 'Configuration', '$resource'];


module.exports = UsersController;
