angular.module('myksr.result', ['myksr.ratings'])

.controller('ResultCtrl', function($scope) {
  $scope.result = $scope.data.input;
});
