const myksr = angular.module('myksr', [ 'myksr.ratings', 'myksr.profile', 'myksr.result', 'ngRoute' ]);

myksr.config(function($routeProvider) {

  $routeProvider
  .when('/ratings', {
    templateUrl: 'ratings/ratings.html',
    controller: 'RatingsCtrl'
  })
  .when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'ProfileCtrl'
  })
  .when('/result', {
    templateUrl: 'result/result.html',
    controller: 'ResultCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

myksr.controller('appCtrl', function($scope, $window){
  $scope.redirect = function(){
    $window.location = '#/profile';
  }
});
