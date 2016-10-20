angular.module('myksr.login', [])

.controller('LoginCtrl', function($scope){

});



function onSignIn(googleUser) {
 var profile = googleUser.getBasicProfile();
 var token = googleUser.getAuthResponse();
 console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
 console.log('Name: ' + profile.getGivenName());
 console.log('Name: ' + profile.getFamilyName());
 console.log('Image URL: ' + profile.getImageUrl());
 console.log('Email: ' + profile.getEmail());
 console.log('TOKEN ID: ' + token.id_token);
}
