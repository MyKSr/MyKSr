angular.module('myksr.users', [])

.controller('UsersCtrl', function($scope, $window) {
  console.log('INSIDE USERS');

  $scope.rate = function() {
    $window.location = '#/ratings';
  }
});