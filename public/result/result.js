angular.module('myksr.result', ['myksr.services'])

.controller('ResultCtrl', function($scope, information, $http) {
  $scope.ratedUser = information.clickedUser;
  $scope.avgActivity = 0;
  $scope.avgSpending = 0;
  $scope.avgPartying = 0;
  $scope.avgNerdy = 0;
  $scope.avgTalkative = 0;
  $http.get(`/getAllRatings/${information.clickedUser}`).then(function (res) {
    //This should never happen because, the user would have been directed to 
    // rating page, not result page if the user has not rated this friend
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
          $scope.yourActivity = ratingObj.activityLevel;
          $scope.yourSpending = ratingObj.spendingLevel;
          $scope.yourPartying = ratingObj.partyingLevel;
          $scope.yourNerdy = ratingObj.nerdyLevel;
          $scope.yourTalkative = ratingObj.talkativeLevel;
          $scope.yourComment = ratingObj.comment;
        }
        $scope.avgActivity += ratingObj.activityLevel;
        $scope.avgSpending += ratingObj.spendingLevel;
        $scope.avgPartying += ratingObj.partyingLevel;
        $scope.avgNerdy += ratingObj.nerdyLevel;
        $scope.avgTalkative += ratingObj.talkativeLevel;
        $scope.allComments.push(ratingObj.comment);
    	}
      $scope.avgActivity = Math.round($scope.avgActivity/count*10)/10;
      $scope.avgSpending = Math.round($scope.avgSpending/count*10)/10;
      $scope.avgPartying = Math.round($scope.avgPartying/count*10)/10;
      $scope.avgNerdy = Math.round($scope.avgNerdy/count*10)/10;
      $scope.avgTalkative = Math.round($scope.avgTalkative/count*10)/10;
    }
  });
});
