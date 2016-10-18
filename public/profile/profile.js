angular.module('myksr.profile', [])

.controller('ProfileCtrl', function($scope){
  $scope.name = 'Chris';
  $scope.gender = 'Male';
  $scope.age = 500;
});
