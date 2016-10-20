angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window, information) {
  // On click we want to render the result of rating that person INCLUDING their new average rating
  $scope.rate = "";

  $scope.submit = function() {
    if ($scope.rate) {
      information.clickedUserRating = $scope.rate;
      console.log('inside rating submit');      
    	$http({
    		method: 'POST',
    		url: '/postrating',
        data: {rate: $scope.rate,
               rater: information.currentUser,
               rated: information.clickedUser
        }
    	}).then(function(res) {
        $window.location = '#/result';
        console.log('CLIENT POST RES ',res);
      }, function(res) {
        console.error(res);
      });
      
      $scope.rate = "";
    }


  }
})
.factory('ratingService', function(){
    this.currentRating = 0;
});

