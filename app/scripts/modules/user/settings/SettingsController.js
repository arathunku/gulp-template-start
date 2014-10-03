'use strict';

var SettingsController = function($scope) {
  this.$scope = $scope;

  $scope.name = 'SettingsController';

  $scope.$on('$destroy', this.destroy.bind(this));
  return this;
};

SettingsController.prototype.destroy = function() {
  this.$scope = undefined;
};

SettingsController.$inject = ['$scope'];


module.exports = SettingsController;
