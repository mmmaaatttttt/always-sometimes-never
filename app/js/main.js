(function() {
  
  'use strict';

  require('angular');
  require('angular-route');
  require('angular-animate');
  // require('satellizer');
  var mainCtrl = require('./controllers/mainctrl');
  var loginCtrl = require('./controllers/loginCtrl');

  angular.module('ASNApp', ['ngRoute', 'ngAnimate', 'satellizer'])
    
    .config([
      '$locationProvider', 
      '$routeProvider', 
      'satellizer',
      function($locationProvider, $routeProvider, $authProvider) {

        $authProvider.facebook({
          clientId: 'Facebook App ID'
        });

        $authProvider.google({
          clientId: 'Google Client ID'
        });

        $locationProvider.hashPrefix('!');
        $routeProvider
          .when('/', {
            templateUrl: './partials/partial1.html',
            controller: 'MainController'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ])

    .controller('MainController', ['$scope', mainCtrl])
    .controller('LoginController', ['$scope', '$auth', loginCtrl]);

})();