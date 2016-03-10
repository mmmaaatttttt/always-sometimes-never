(function() {

  'use strict';

  // console.log("sup");
  require('angular');
  require('angular-route');
  require('angular-animate');
  var mainCtrl = require('./controllers/mainctrl');
  var signupCtrl = require('./controllers/signupctrl');
  var authService = require('./services/authservice');

  angular.module('ASNApp', ['ngRoute', 'ngAnimate'])
    
    .config([
      '$locationProvider', 
      '$routeProvider', 
      function($locationProvider, $routeProvider) {
        $routeProvider
          .when('/signup', {
            templateUrl: './partials/signup.html',
            controller: 'SignupController'
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
    .controller('SignupController', ['$scope', 'AuthService', signupCtrl])
    .service('AuthService', ['$http', authService]);

})();