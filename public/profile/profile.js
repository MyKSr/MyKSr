angular.module('myksr.profile', [])

.controller('ProfileCtrl', function($scope, information, $http){
  $http.get('/')

});
