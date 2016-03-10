module.exports = function($http) {
  return {
    auth: function(company) {
      return $http.get('/auth/'+company);
    }
  };
};