angular.module('myksr.signin', [])

.controller('signinCtrl', function ($scope, $http, $window, information) {
	$scope.submitSignin = function (){
		if (!$scope.username.length){
      alert('Tell us what your first name is!');
		} else {
		  $http.get('/checkUser/'+$scope.username).then(function (res) {
		  	if(res.data[0]){
          information.currentUser = $scope.username;
          $window.location = '#/users';
		  	}
		  	else{
		  		alert('User with the username dose not exist!');
		  	}
		  });
		}
	}
});
