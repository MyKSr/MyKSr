const myksr = angular.module('myksr', [ 'myksr.ratings', 'myksr.profile', 'myksr.result', 'myksr.services', 'myksr.users', 'myksr.signup', 'myksr.signin', 'ngRoute', 'ngFileUpload']);

myksr.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'welcome/welcome.html'
  })
  .when('/users', {
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
  .when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl'
  })
  .when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

myksr.controller('appCtrl', function($scope, $window, information, $http){
  $scope.redirect = function(){
    $window.location = '#/profile';
  }

  $scope.home = function(){
    $window.location = '#/';
  }

  $scope.postUserInfoToDB = function(){
    console.log('post user to db');
  }

  $scope.signOut = function(){
    information.currentUser = null;
    $window.location = '#/';
  }

  $scope.isSignedIn = function(){
    console.log('USER STATUS ', information.currentUser);
    if(information.currentUser){
      return true;
    } else {
      return false;
    }
  }
});
