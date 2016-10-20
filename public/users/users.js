angular.module('myksr.users', [])

.controller('UsersCtrl', function($scope, $window, $http, information) {
  console.log('Current User: ', information.currentUser);
  $scope.currentUser = information.currentUser;
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
    console.log(rater, rated);
    information.clickedUser = rated;
    var urlString = `/${rater}/${rated}`;
    $http.get(urlString).then(function (response) {
      // If !(response), redirect them to rating page
      if (!response.data[0]){
      //else direct them to the friend's info page
        $window.location = '#/ratings';
      }else {
        console.log('this is the result: ',response);
        information.clickedUserRating = response.data[0].rating;
        console.log('We are getting sth from server');
        $window.location = '#/result';
      }

    }, function (error) {

    });
  }
  var init = function () {
    $scope.fetchGroupMembers();
  };
  init();
});