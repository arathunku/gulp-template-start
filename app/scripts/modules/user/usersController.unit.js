'use strict';

var UsersController = require('./usersController.js');
var $scope = {
  $on: jasmine.createSpy('$on')
};

var Configuration = {
  host: {
    api: 'http'
  }
};

var usersResponse = {
  users: [{id: 1}]
};

var $resource = jasmine.createSpy('$resource').and.returnValue({
  get: function(_, cb){
    return cb(usersResponse);
  }
});

var usersController;

describe('UsersController', function() {
  beforeEach(function(){
    usersController = new UsersController($scope, Configuration, $resource);
  });

  it('should bind destroy', function() {
    expect(usersController.$scope.$on)
      .toHaveBeenCalledWith('$destroy', jasmine.any(Function));
  });

  it('destroy should clean objects', function(){
    usersController.destroy();
    expect(usersController.$scope).toBe(undefined);
  });

  it('should query and assign users', function() {
    expect(usersController.$scope.users).toEqual(usersResponse.users);
  });
});
