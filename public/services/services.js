angular.module('myksr.services', [])

.factory('postToDBFactory', function($http) {
  return {
    postSignup: function(firstname, lastname, pic, email) {
      return $http({
        method: 'POST',
        url: '/signup',
        data: {firstname: firstname, lastname: lastname, pic: pic, email: email}
      })
      .then(function(resp) {
        return resp.data;
      })
    }
  }
})
.factory('information', function() {
  return {
    currentUser: '',
    clickedUser: '',
    clickedUserRating: 0
  }
})
