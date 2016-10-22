angular.module('myksr.result', ['myksr.services'])

.controller('ResultCtrl', function($scope, information, $http) {
  $scope.ratedUser = information.clickedUser;
  $http.get(`/getAllRatings/${information.clickedUser}`).then(function (res) {
    //This should never happen because, the user would have been directed to 
    // rating page, not result page if the user has not rated this friend
    if (!res.data[0]) {
    	alert('This person has not been rated yet');
    	$scope.yourRating = 0;
    	$scope.yourComment = 'You have not rated this person';
    	$scope.averageRating = 0;
    	$scope.allComments = [];
    } else {
    	for (var ratingObj of res.data) {
        if (ratingObj.username === information.currentUser) {
        	$scope.currnetUser = ratingObj.firstname;
          ratingObj.
        }
    	}
    }
  });
});
