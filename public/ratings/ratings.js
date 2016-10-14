angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http) {
  $scope.rating = "5";
  $scope.data = {};

  $scope.submit = function() {
  	$http({
  		method: 'POST',
  		url: '/postrating'
  	}).then(function(res) {
  		console.log(res);
  	}, function(res) {
  		console.error(res);
  	});

  	$scope.rate = "";
  }
});
