angular.module('login_poc')
  .constant('httpRequest', httpRequest);

function httpRequest(url, method, data, $q, $http) {
  var deferred = $q.defer();
  var baseUrl = 'http://127.0.0.1:8000';

  $http({
    method: method,
    url: baseUrl + url,
    data: data
  })
  .success(function(data, status, headers, config) {
    deferred.resolve(data);
  })
  .catch(function(data, status, headers, config) {
    deferred.reject(data);
  });

  return deferred.promise;
}
