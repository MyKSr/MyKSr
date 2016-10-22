angular.module('myksr.profile', [])

.controller('ProfileCtrl', function($scope, information, $http){
  $http.get(`/currentUserInfo/${information.currentUser}`).then(function (res) {
  	
  })

});
