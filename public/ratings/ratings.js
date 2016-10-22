angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window, information) {
  // On click we want to render the result of rating that person INCLUDING their new average rating
  $scope.activityLevel = "";
  $scope.spendingLevel = ""
  $scope.comment = "";

  $scope.submit = function() {
    if ($scope.activityLevel) {
      console.log('inside rating submit');      
    	$http({
    		method: 'POST',
    		url: '/postrating',
        data: {activityLevel: $scope.activityLevel,
               spendingLevel: $scope.spendingLevel,
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
      
      $scope.activityLevel = "";
      $scope.spendingLevel = "";
      $scope.comment = "";
    }


  }
})
.factory('ratingService', function(){
    this.currentRating = 0;
});

