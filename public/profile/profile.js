angular.module('myksr.profile', [])

.controller('ProfileCtrl', function($scope, information, $http){
  $http.get(`/currentUserInfo/${information.currentUser}`).then(function (res) {
	  console.log('clientside profile: ', res.data[0]);
    $scope.firstname = res.data[0].firstname;
    $scope.lastname = res.data[0].lastname;
    $scope.gender = res.data[0].gender;
    $scope.email = res.data[0].email;
    $scope.username = res.data[0].username;
	  $http.get(`/getAllRatings/${res.data[0].firstname}`).then(function (res) {
	  	$scope.averageRating = 0;
	  	$scope.allComments = [];
	    if (!res.data[0]) {
	    	alert('You have not been rated yet');
	    } else {
	    	var count = 0;
	    	for (var ratingObj of res.data) {
	    		count++;
	        $scope.averageRating += ratingObj.rating;
	        $scope.allComments.push(ratingObj.comment);
	    	}
	    	$scope.averageRating = Math.round($scope.averageRating/count*10)/10;
	    }
	  });
  });
});
