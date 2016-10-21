angular.module('myksr.signin', [])

.controller('signinCtrl', function ($scope, $http, $window, information) {
	$scope.submitSignin = function (){
		if (!$scope.firstname.length){
      alert('Tell us what your first name is!');
		} else {
		  $http.get('/checkUser/'+$scope.firstname).then(function (res) {
		  	console.log('This is what we get back', res.data);
		  	if(res.data[0]){
          information.currentUser = $scope.firstname;
          $window.location = '#/users';
		  	}
		  	else{
		  		alert('User with the firstname dose not exist!');
		  	}
		  });
		}
	}
});
