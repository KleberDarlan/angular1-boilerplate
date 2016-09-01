'use strict';

angular.module('login_poc')
  .controller('AuthController', ['$scope', 'AuthService', 'StorageService',
  function($scope, AuthService, StorageService) {

    $scope.logIn = function() {
      var data = $scope.user;

      AuthService.login(data)
      .then(function(data) {
        StorageService.setItem('user', data.user);
        StorageService.setItem('token', data.token);
      })
      .catch(function(err) {
        $scope.errors = err.data;
      });
    }
  }]);
