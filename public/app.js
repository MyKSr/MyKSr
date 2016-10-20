const myksr = angular.module('myksr', [ 'myksr.ratings', 'myksr.profile', 'myksr.result', 'myksr.services', 'myksr.users', 'myksr.login', 'myksr.signup', 'ngRoute']);

myksr.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  })
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
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  })
  .when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

myksr.controller('appCtrl', function($scope, $window){
  $scope.redirect = function(){
    $window.location = '#/profile';
  }

  $scope.goToRatings = function(){
    $window.location = '#/ratings';
  }

  $scope.home = function(){
    $window.location = '#/';
  }
});
