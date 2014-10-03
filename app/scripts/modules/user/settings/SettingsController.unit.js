'use strict';

var SettingsController = require('./SettingsController.js');
var $scope = {
  $on: jasmine.createSpy('$on')
};

var settingsController;


describe('SettingsController', function() {
  beforeEach(function(){
    settingsController = new SettingsController($scope);
  });

  it('should set the name of controller', function() {
    expect(settingsController.$scope.name).toBe('SettingsController');
  });

  it('should bind destroy', function() {
    expect(settingsController.$scope.$on)
      .toHaveBeenCalledWith('$destroy', jasmine.any(Function));
  });

  it('destroy should clean objects', function(){
    settingsController.destroy();
    expect(settingsController.$scope).toBe(undefined);
  });
});
