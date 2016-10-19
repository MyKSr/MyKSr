angular.module('myksr.users', [])

.controller('UsersCtrl', function($scope, $window, $http) {
  console.log('INSIDE USERS');

  // eventually Fetch the users who are in the same group as the rater,
  // for now, fetch all users, then save it as a scope variable
  // have it rendered on html using ng repeat
  $scope.groupFriends = [];
  $scope.fetchGroupMembers =  function() {
    $http.get('/allFriends').then(function (response) { 
      //expect to get an array of data
      console.log(response);
      console.log('Successfully fetched all users from server');
      $scope.groupFriends = response.data;
    }, function (error) {
      console.log('Only friend in our db in the same group as you is the owl.');
      console.log('Actually I failed to fetch data...');
      $scope.groupFriends = ['owl'];
    });
  }
  $scope.rate = function() {
    $window.location = '#/ratings';
  }

  $scope.clickFriend = function(rater, rated) {
    var urlString = `/${rater}/${rated}`;
    $http.get(urlString).then(function (response) {
    // If !(response), redirect them to rating page
    
    //else direct them to the friend's info page

    }, function (error) {

    });
  }
  var init = function () {
    $scope.fetchGroupMembers();
  };
  init();
});