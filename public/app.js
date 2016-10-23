const myksr = angular.module('myksr', [ 'myksr.ratings', 'myksr.profile', 'myksr.result', 'myksr.services', 'myksr.users', 'myksr.signup', 'myksr.signin', 'ngRoute']);

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

  $window.onLoadCallback = function(){
    gapi.load('auth2', function(){
      gapi.auth2.init();
    });
  };

  $window.onSignIn = function(googleUser) {
    var profile = googleUser.getBasicProfile();
    information.currentUser = profile.getGivenName();
    information.image = profile.getImageUrl();
     $http.get('/currentUserInfo/'+profile.getGivenName()).then(function(res){
        console.log('SIGNED IN USER', res.data);
        if(!res.data[0]){
         $http.post('/signup', {
            firstname: profile.getGivenName(),
            lastname: profile.getFamilyName(),
            gender: 'X',
            username: profile.getGivenName(),
            email: profile.getEmail(),
            password: profile.getImageUrl()
         });
        }
        $window.location = '#/users';
     })

  }

  $window.signOut = function(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      information.currentUser = '';
      $window.location = '#/login';
      console.log('User signed out');
    });
  }
});
