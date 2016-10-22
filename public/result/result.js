angular.module('myksr.result', ['myksr.services'])

.controller('ResultCtrl', function($scope, information, $http) {
  $scope.ratedUser = information.clickedUser;
  $http.get(`/getAllRatings/${information.clickedUser}`).then(function (res) {
    //This should never happen because, the user would have been directed to 
    // rating page, not result page if the user has not rated this friend
  	$scope.averageRating = 0;
  	$scope.allComments = [];
    if (!res.data[0]) {
    	alert('This person has not been rated yet');
    	$scope.yourRating = 0;
    	$scope.yourComment = 'You have not rated this person';
    } else {
    	var count = 0;
    	for (var ratingObj of res.data) {
    		count++;
        if (ratingObj.username === information.currentUser) {
        	$scope.currnetUserName = ratingObj.firstname;
          $scope.yourRating = ratingObj.rating;
          $scope.yourComment = ratingObj.comment;
        }
        $scope.averageRating += ratingObj.rating;
        $scope.allComments.push(ratingObj.comment);
    	}
    	$scope.averageRating = Math.round($scope.averageRating/count*10)/10;
    }
  });
});
