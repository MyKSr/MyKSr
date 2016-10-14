angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http) {
  $scope.data = {};

  $scope.submit = function() {
  	$http({
  		method: 'POST',
  		url: '/postrating',
      data: {rate: $scope.rate}
  	}).then(function(res) {
  		console.log('CLIENT POST RES ',res);
  	}, function(res) {
  		console.error(res);
  	});

  	$scope.rate = "";
  }
});
