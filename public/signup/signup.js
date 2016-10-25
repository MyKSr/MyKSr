angular.module('myksr.signup', [])

.controller('signupCtrl', function ($scope, $http, $window, information, Upload) {
	$scope.submitSignup = function (){
		console.log("The file", $scope.file);
		// upload on file select or drop
		var signupUserInfo = {
			firstname : $scope.firstname,
      lastname : $scope.lastname,
      username : $scope.username,
      email : $scope.email,
      password : $scope.password1,
      gender : $scope.gender,
			file: $scope.file
		}
		var emptyField = false;
		// for (var info in signupUserInfo) {
		// 	// console.log('for in loop', signupUserInfo[info]);
		// 	if (!signupUserInfo[info]) {
    //     emptyField = true;
		// 	}
		// }
		if (emptyField){
      alert('There is an empty field please fill all of the fields');
		}else if ($scope.password1 !== $scope.password2) {
      alert('Your confirm password does not match your desired password');
		}else {
		  $http.get('/currentUserInfo/'+$scope.username).then(function (res) {
		  	// console.log('This is what we get back', res.data);
		  	if(!res.data[0]){
		  		Upload.upload({
						url: '/signup',
						data: signupUserInfo
					}).then(function (resp) {
		  			// console.log('user successfully signed up');
	          information.currentUser = $scope.username;
	          information.currentUserFirstname = $scope.firstname;
						console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
	          $window.location = '#/users';
		  		}, function (resp) {
						console.log('Error status: ' + resp.status);
					}, function (evt) {
						var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
						console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
					});
		  	}
		  	else{
		  		alert('User with the same username exists');
		  	}
		  });
		}
	}
});
