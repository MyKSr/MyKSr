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
    currentUserFirstname:''
  }
})
.factory('stringifyFunc', function() {
  return {
    strfy : function (type, val) {
      var index = (val < 33) ? 0 : (val < 66) ? 1 : 2;
      if (type === 'activity') {
        var displayMessages = [',,, once a month ish?', ' joins others.', ' will organize events!'];
      } else if (type === 'spending') {
        var displayMessages = [',,, once a month ish?', ' joins others.', ' will organize events!'];
      } else if (type === 'partying') {
        var displayMessages = [',,, once a month ish?', ' joins others.', ' will organize events!'];
      } else if (type === 'nerdy') {
        var displayMessages = [',,, once a month ish?', ' joins others.', ' will organize events!'];
      } else {
        var displayMessages = [',,, once a month ish?', ' joins others.', ' will organize events!'];
      }
      return displayMessages[index];
    }
  }
})
