'use strict';

angular.module('login_poc')
  .controller('AuthController', AuthController);

function AuthController ($scope, AuthService, StorageService) {

  $scope.logIn = () => {
    let data = $scope.user;

    AuthService.login(data)
    .then((data) => {
      StorageService.setItem('user', data.user);
      StorageService.setItem('token', data.token);
    })
    .catch((err) => {
      $scope.errors = err.data;
    });
  };

  $scope.fakeLogIn = () => {
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
  };
}
