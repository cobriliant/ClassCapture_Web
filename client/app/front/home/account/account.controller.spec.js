'use strict';

describe('Controller: AccountCtrl', function () {

  // load the controller's module
  beforeEach(module('classCaptureApp'));

  var AccountCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountCtrl = $controller('AccountCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
