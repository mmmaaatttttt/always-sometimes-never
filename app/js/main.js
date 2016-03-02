(function() {

  'use strict';

  // console.log("sup");
  require('angular');
  require('angular-route');
  require('angular-animate');
  require('satellizer');
  var mainCtrl = require('./controllers/mainctrl');
  var loginCtrl = require('./controllers/loginCtrl');

  angular.module('ASNApp', ['ngRoute', 'ngAnimate', 'satellizer'])
    
    .config([
      '$locationProvider', 
      '$routeProvider', 
      '$authProvider',
      function($locationProvider, $routeProvider, $authProvider) {

        $authProvider.facebook({
          clientId: 'Facebook App ID'
        });

        $authProvider.google({
          clientId: 'Google Client ID'
        });

        $routeProvider
          .when('/auth/signup', {
            templateUrl: './partials/signup.html',
            controller: 'LoginController'
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

    .controller('MainController', ['$scope', mainCtrl])
    .controller('LoginController', ['$scope', '$auth', loginCtrl]);

})();