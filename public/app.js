const myksr = angular.module('myksr', [ 'myksr.users', 'ngRoute' ]);

myksr.config(function($routeProvider) {

  $routeProvider
  .when('/users', {
    templateUrl: 'users.html',
    controller: 'UserCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
