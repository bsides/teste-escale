var testEscale = angular.module('app');

testEscale.component('app', {
  templateUrl: 'app/main.html',
  controller: 'mainCtrl'
});

testEscale.factory('GHAPI', function($http, $q) {
  return {
    getStars: function() {
      return $http.get('https://api.github.com/users/wilfernandesjr/starred?access_token=e3151306b0b60af40dac11a5903ff09141c84176').then(function(response) {
        return response.data
      });
    },
  };
});

testEscale.controller('mainCtrl', function($scope, GHAPI) {
  GHAPI.getStars().then(function(data) {
    $scope.stars = data;
  }, function() {
    $scope.error = 'Não foi possível se conectar ao Github :(';
  });

  $scope.filtering = function() { console.log('alo') };
});

testEscale.filter('unique', function() {
  return function(collection, keyname) {
    var output = [],
        keys = [];

    angular.forEach(collection, function(item) {
      var key = item[keyname];
      if(keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });

    return output;
  };
});
