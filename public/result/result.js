angular.module('myksr.result', ['myksr.services'])

.controller('ResultCtrl', function($scope, information, $http, stringifyFunc) {
  $scope.ratedUser = information.clickedUser;
  $scope.avgActivity = 0;
  $scope.avgSpending = 0;
  $scope.avgPartying = 0;
  $scope.avgNerdy = 0;
  $scope.avgTalkative = 0;
  $http.get(`/getAllRatings/${information.clickedUser}`).then(function (res) {
    $scope.subject = (res.data[0].gender === "M") ? "He" : "She";
    var thisPerson = (res.data[0].gender === "M") ? "him" : "her";
    //This should never happen because, the user would have been directed to
    // rating page, not result page if the user has not rated this friend
  	$scope.allComments = [];
    if (!res.data[0]) {
      $scope.currnetUserName = ratingObj.firstname;
      $scope.yourActivity = `You haven't rated ${thisPerson}!`;
      $scope.yourSpending = `You haven't rated ${thisPerson}!`;
      $scope.yourPartying = `You haven't rated ${thisPerson}!`;
      $scope.yourNerdy = `You haven't rated ${thisPerson}!`;
      $scope.yourTalkative = `You haven't rated ${thisPerson}!`;
    	$scope.yourComment = `You haven't rated ${thisPerson}!`;

      $scope.strActivity = `Nobody has rated ${thisPerson}!`;
      $scope.strSpending = `Nobody has rated ${thisPerson}!`;
      $scope.strPartying = `Nobody has rated ${thisPerson}!`;
      $scope.strNerdy = `Nobody has rated ${thisPerson}!`;
      $scope.strTalkative = `Nobody has rated ${thisPerson}!`;
    } else {
    	var count = 0;
    	for (var ratingObj of res.data) {
    		count++;
        if (ratingObj.username === information.currentUser) {
        	$scope.currentUserName = ratingObj.firstname;
          $scope.yourActivity = stringifyFunc.strfy('activity', ratingObj.activityLevel);
          $scope.yourSpending = stringifyFunc.strfy('spending', ratingObj.spendingLevel);
          $scope.yourPartying = stringifyFunc.strfy('partying', ratingObj.partyingLevel);
          $scope.yourNerdy = stringifyFunc.strfy('nerdy', ratingObj.nerdyLevel);
          $scope.yourTalkative = stringifyFunc.strfy('talkative', ratingObj.talkativeLevel);
          $scope.yourComment = ratingObj.comment;
        }
        $scope.avgActivity += ratingObj.activityLevel;
        $scope.avgSpending += ratingObj.spendingLevel;
        $scope.avgPartying += ratingObj.partyingLevel;
        $scope.avgNerdy += ratingObj.nerdyLevel;
        $scope.avgTalkative += ratingObj.talkativeLevel;
        $scope.allComments.push(ratingObj.comment);
    	}
      var avgAct = Math.round($scope.avgActivity/count*10)/10;
      var avgSpend = Math.round($scope.avgSpending/count*10)/10;
      var avgParty = Math.round($scope.avgPartying/count*10)/10;
      var avgNerd = Math.round($scope.avgNerdy/count*10)/10;
      var avgTalk = Math.round($scope.avgTalkative/count*10)/10;
      $scope.strActivity = stringifyFunc.strfy('activity', avgAct);
      $scope.strSpending = stringifyFunc.strfy('spending', avgSpend);
      $scope.strPartying = stringifyFunc.strfy('partying', avgParty);
      $scope.strNerdy = stringifyFunc.strfy('nerdy', avgNerd);
      $scope.strTalkative = stringifyFunc.strfy('talkative', avgTalk);
    }
  });
});
