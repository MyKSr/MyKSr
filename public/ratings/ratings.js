angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window) {
  $scope.data = {};

  $scope.submit = function() {
  	$http({
  		method: 'POST',
  		url: '/postrating',
      data: {rate: $scope.rate}
  	}).then(function(res) {
      $window.location = '#/result';
      console.log('CLIENT POST RES ',res);
    }, function(res) {
      console.error(res);
    });

    $scope.rate = "";

  }
})
.service('ratingService', function(){
    $scope.data.input = $scope.rate;
});

