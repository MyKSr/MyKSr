angular.module('myksr.result', ['myksr.services'])

.controller('ResultCtrl', function($scope, factory) {
  console.log('INSIDE RESULTS ', factory);

  $scope.result = factory;
});
