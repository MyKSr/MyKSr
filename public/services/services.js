angular.module('myksr.services', [])

.factory('factory', function(){
  return 'please work';
})
.factory('signupFactory', function($http) {
  return {
    postSignup = function(firstname, lastname, username, email, password) {
      return $http({
        method: 'POST',
        url: '/postSignup',
        data: {firstname: firstname, lastname: lastname, username: username, email: email, password: password}
      })
      .then(function(resp) {
        return resp.data;
      })
    }
  }
})
