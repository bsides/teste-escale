var testEscale = angular.module('app');

testEscale
  .component('app', {
    templateUrl: 'app/main.html',
    controller: function () {
      this.main = 'Hello World!';
      this.hello = 'Hello';
    }
  });
