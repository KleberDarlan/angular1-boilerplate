'use strict';

angular.module('login_poc')
  .factory('AuthService', ['$http', '$q', 'httpRequest', function($http, $q, httpRequest) {
    return {
      login: function(data) {
        var url = '/accounts/login';
        var method = 'POST';
        return httpRequest(url, method, data, $q, $http);
      }
    }
  }]);
