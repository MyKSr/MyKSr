angular.module('myksr.signup', [])

.controller('signupCtrl', function ($scope, $http, $window, information) {
	$scope.submitSignup = function (){
		var signupUserInfo = {
			firstname : $scope.firstname,
      lastname : $scope.lastname,
      username : $scope.username,
      gender : $scope.gender,
      email : $scope.email,
      password : $scope.pwd
		}
		var emptyField = false;
		for (var info in signupUserInfo) {
			if (!signupUserInfo[info]) {
        emptyField = true;
			}
		}
		if (emptyField){
      alert('There is an empty field please fill all of the fields');
		}else if ($scope.pwd !== $scope.cfmPwd) {
      alert('Your confirm password does not match your desired password');
		}else {
		  $http.get('/checkUser/'+$scope.firstname).then(function (res) {
		  	// console.log('This is what we get back', res.data);
		  	if(!res.data[0]){
		  		$http.post('/signup', signupUserInfo).then(function () {
		  			console.log('user successfully signed up');
	          information.currentUser = $scope.firstname;
	          $window.location = '#/users';
		  		});
		  	}
		  	else{
		  		alert('User with the same firstname exists');
		  	}
		  });
		}
	}
});
