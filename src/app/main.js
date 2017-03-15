var testEscale = angular.module('app');

testEscale
  .component('app', {
    templateUrl: 'app/main.html',
    controller: 'mainCtrl'
  });

testEscale.factory('GHAPI', function($http, $q) {
  var url = {
    base: 'https://api.github.com/users/wilfernandesjr',
    stars: '/starred',
  };

  return {
    getStars: function() {
      return $http.get(url.base + url.stars).then(function(response) { return response.data });
    }
  };
});

testEscale.controller('mainCtrl', function($scope, GHAPI) {
  GHAPI.getStars().then(function(data) {
    $scope.stars = data;
  }, function() {
    $scope.error = 'Não foi possível se conectar ao Github :(';
  });
});
