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

myksr.controller('appCtrl', function($scope, $window, information){
  $scope.redirect = function(){
    $window.location = '#/profile';
  }

  $scope.goToRatings = function(){
    $window.location = '#/ratings';
  }

  $scope.home = function(){
    $window.location = '#/';
  }

  $scope.postUserInfoToDB = function(){
    console.log('post user to db');
  }

  $window.onLoadCallback = function(){
    gapi.load('auth2', function(){
      gapi.auth2.init();
    });
  };

  $window.onSignIn = function(googleUser) {
     var profile = googleUser.getBasicProfile();
     // var token = googleUser.getAuthResponse();
     // $scope.ID = profile.getId(); // Do not send to your backend! Use an ID token instead.
     information.currentUser = profile.getGivenName();
     console.log('Google sign-in fn running', information.currentUser);
     $scope.lastName = profile.getFamilyName();
     $scope.img = profile.getImageUrl();
     $scope.email = profile.getEmail();
     // console.log('TOKEN ID: ' + token.id_token);
  }

  $window.signOut = function(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out');
    });
  }
});
