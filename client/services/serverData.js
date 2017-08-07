angular.module('travel-dashboard')
.service('serverData', function($http) {
  this.fetch = function(callback) {
    $http.get('http://127.0.0.1:4000/Togos')
    .then(function(response) {
      if (callback) {
        callback(response.data);
      }
    }).catch(function(response) {
      console.log('This is the error response object in get', response);
    });
  };

  this.send = function(data, callback) {
    $http.post('http://127.0.0.1:4000/Togos', data)
    .then(function(response) {
      console.log('RESPONSE ', response);
      if (callback) {
        callback(response.data);
      }
    }).catch(function(response) {
      console.log('This is the error response object in post', response);
    });

  };

});