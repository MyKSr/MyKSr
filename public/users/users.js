angular.module('myksr.users', [])

.controller('UsersCtrl', function($scope, $window, $http) {
  console.log('INSIDE USERS');

  $scope.rate = function() {
    $window.location = '#/ratings';
  }

  $scope.clickFriend = function() {
  	$http.get();
  }
});