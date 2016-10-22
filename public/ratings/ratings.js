angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window, information) {

  $scope.submit = function() {
    var notAllFilled = false;
    for (var level in $scope.ratingsObj) {
      if ($scope.ratingsObj[level].length === 0){
        notAllFilled = true;
      }
    }
    if (notAllFilled) {
        alert('Please fill in all the fields!');
    }else {
      var ratingsObj = {
                        activityLevel : $scope.activityLevel,
                        spendingLevel : $scope.activityLevel,
                        partyingLevel : $scope.activityLevel,
                        nerdyLevel : $scope.activityLevel,
                        talkativeLevel : $scope.activityLevel
                       };
      var reqData = {ratingsObj: ratingsObj,
                     comment: $scope.comment,
                     raterUsername: information.currentUser,
                     rated: information.clickedUser
                    }
    	$http.post('/postrating', reqData).then(function(res) {
        console.log('client post response from postrating: ',res);
        $window.location = '#/result';
      }, function(err) {
        console.error(err);
      });
      
      for (var level in $scope.ratingsObj) {
        $scope.ratingsObj[level] = undefined;
      } 
      $scope.comment = "";
    }


  }
})
.factory('ratingService', function(){
    this.currentRating = 0;
});

