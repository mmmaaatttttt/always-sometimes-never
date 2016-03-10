module.exports = function($scope, AuthService) {
  $scope.user = {};
  $scope.signup = function(user) {
    console.log('submitted!');
  };
  $scope.auth = function(company) {
    console.log('button clicked!');
    AuthService.auth(company).then(function() {
      console.log('trying to auth...');
    });
  };
};