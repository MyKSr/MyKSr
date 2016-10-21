angular.module('myksr.profile', [])

.controller('ProfileCtrl', function($scope, information){
  $scope.name = information.currentUser;
  $scope.img = information.image;
});
