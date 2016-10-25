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
      // console.log(val);
      var index = (val < 33) ? 0 : (val < 66) ? 1 : 2;
      if (type === 'activity') {
        var displayMessages = [' lives outside.', ' is moderately active.', ' prefers indoor activities.'];
      } else if (type === 'spending') {
        var displayMessages = [' prefers to bring lunch from home.', ' prefers casual dining.', ' prefers fine dining.'];
      } else if (type === 'partying') {
        var displayMessages = [' likes to go out to bars and clubs.', ' likes to watch movies.', ' is studying.'];
      } else if (type === 'nerdy') {
        var displayMessages = [' is rarely seen without his/her laptop.', ' balances work and play.', ' prefers not to talk about code.'];
      } else {
        var displayMessages = [' is very social and lively.', ' adapts to his/her environment.', ' is more quiet and reserved.'];
      }
      return displayMessages[index];
    }
  }
})
