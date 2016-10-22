angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window, information) {
  // On click we want to render the result of rating that person INCLUDING their new average rating
  $scope.rate = "";
  $scope.comment = "";

  $scope.submit = function() {
    if ($scope.rate) {
      information.clickedUserRating = $scope.rate;
      information.clickedUserComment = $scope.comment;
      console.log('inside rating submit');      
    	$http({
    		method: 'POST',
    		url: '/postrating',
        data: {rate: $scope.rate,
               comment: $scope.comment,
               raterUsername: information.currentUser,
               rated: information.clickedUser
        }
    	}).then(function(res) {
        $window.location = '#/result';
        console.log('CLIENT POST RES ',res);
      }, function(err) {
        console.error(err);
      });
      
      $scope.rate = "";
      $scope.comment = "";
    }


  }
})
.factory('ratingService', function(){
    this.currentRating = 0;
});

