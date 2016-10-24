angular.module('myksr.profile', [])

.controller('ProfileCtrl', function($scope, information, $http, stringifyFunc){
  $http.get(`/currentUserInfo/${information.currentUser}`).then(function (res) {
    $scope.avgActivity = 0;
    $scope.avgSpending = 0;
    $scope.avgPartying = 0;
    $scope.avgNerdy = 0;
    $scope.avgTalkative = 0;
    $scope.firstname = res.data[0].firstname;
    $scope.lastname = res.data[0].lastname;
    $scope.gender = res.data[0].gender;
    $scope.email = res.data[0].email;
    $scope.username = res.data[0].username;
    $scope.subject = ($scope.gender === 'M')? 'He' : 'She';
	  $http.get(`/getAllRatings/${res.data[0].firstname}`).then(function (res) {
	  	$scope.allComments = [];
	    if (!res.data[0]) {
        $scope.strActivity = "Nobody has rated you!";
        $scope.strSpending = "Nobody has rated you!";
        $scope.strPartying = "Nobody has rated you!";
        $scope.strNerdy = "Nobody has rated you!";
        $scope.strTalkative = "Nobody has rated you!";
	    } else {
	    	var count = 0;
	    	for (var ratingObj of res.data) {
	    		count++;
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
});
