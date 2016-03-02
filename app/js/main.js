(function() {

  'use strict';

  // console.log("sup");
  require('angular');
  require('angular-route');
  require('angular-animate');
  var mainCtrl = require('./controllers/mainctrl');

  angular.module('ASNApp', ['ngRoute', 'ngAnimate'])
    
    .config([
      '$locationProvider', 
      '$routeProvider', 
      function($locationProvider, $routeProvider) {
        $routeProvider
          .when('/auth/signup', {
            templateUrl: './partials/signup.html'
          })
          .when('/', {
            templateUrl: './partials/partial1.html',
            controller: 'MainController'
          })
          .otherwise({
            redirectTo: '/'
          });
        $locationProvider.html5Mode(true);  
      }
    ])

    .controller('MainController', ['$scope', mainCtrl]);

})();