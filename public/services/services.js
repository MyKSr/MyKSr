angular.module('myksr.services', [])

.factory('factory', function(){
  return 'please work';
})
.factory('signupFactory', function($http) {
  return {
    postSignup: function(firstname, lastname, gender, username, email, password) {
      return $http({
        method: 'POST',
        url: '/postSignup',
        data: {firstname: firstname, lastname: lastname, gender: gender, username: username, email: email, password: password}
      })
      .then(function(resp) {
        return resp.data;
      })
    }
  }
})
.factory('information', function() {
  return {
    currentUser: 'Victor',
    clickedUser: 'Victor',
    clickedUserRating: 0 
  }
})
