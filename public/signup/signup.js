angular.module('myksr.signup', [])

.controller('signupCtrl', function ($scope, $http, $window, information) {
	$scope.submitSignup = function (){
		var signupUserInfo = {
			firstname : $scope.firstname,
      lastname : $scope.lastname,
      username : $scope.username,
      email : $scope.email,
      password : $scope.password1,
      gender : $scope.gender
		}
		var emptyField = false;
		for (var info in signupUserInfo) {
			console.log('for in loop', signupUserInfo[info]);
			if (!signupUserInfo[info]) {
        emptyField = true;
			}
		}
		if (emptyField){
      alert('There is an empty field please fill all of the fields');
		}else if ($scope.password1 !== $scope.password2) {
      alert('Your confirm password does not match your desired password');
		}else {
		  $http.get('/currentUserInfo/'+$scope.username).then(function (res) {
		  	// console.log('This is what we get back', res.data);
		  	if(!res.data[0]){
		  		$http.post('/signup', signupUserInfo).then(function () {
		  			console.log('user successfully signed up');
	          information.currentUser = $scope.username;
	          information.currentUserFirstname = $scope.firstname;
	          $window.location = '#/users';
		  		});
		  	}
		  	else{
		  		alert('User with the same username exists');
		  	}
		  });
		}
	}
});
