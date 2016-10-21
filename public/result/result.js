angular.module('myksr.result', ['myksr.services'])

.controller('ResultCtrl', function($scope, information) {
  console.log('INSIDE RESULTS ', information.clickedUser);

  $scope.ratedUser = information.clickedUser;
  $scope.clickedUserRating = information.clickedUserRating;
  $scope.clickedUserComment = information.clickedUserComment;
});
