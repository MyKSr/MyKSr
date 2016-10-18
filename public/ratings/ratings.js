angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window) {
  // On click we want to render the result of rating that person INCLUDING their new average rating
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
.factory('ratingService', function(){
    this.currentRating = 0;
});

