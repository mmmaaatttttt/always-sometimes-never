(function() {
  
  'use strict';

  angular.module('ASNApp', ['ngRoute', 'ngAnimate'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when('/', {
          templateUrl: './partials/partial1.html',
          controller: 'MainController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);

  angular.module('ASNApp')
    .controller('MainController', ['$scope', function($scope) {
      $scope.test = 'Testing...';
    }]);

})();