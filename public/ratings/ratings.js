angular.module('myksr.ratings', [])

.controller('RatingsCtrl', function($scope, $http, $window, information, stringifyFunc) {
  $scope.clickedUser = information.clickedUser;
  $scope.activityLevel = 50;
  $scope.spendingLevel = 50;
  $scope.partyingLevel = 50;
  $scope.nerdyLevel = 50;
  $scope.talkativeLevel = 50;
  $scope.updateStr = function (type, val) {
    if (type === 'activity'){
      $scope.activityStr = stringifyFunc.strfy(type, val);
    } else if (type === 'spending') {
      $scope.spendingStr = stringifyFunc.strfy(type, val);
    } else if (type === 'partying') {
      $scope.partyingStr = stringifyFunc.strfy(type, val);
    } else if (type === 'nerdy') {
      $scope.nerdyStr = stringifyFunc.strfy(type, val);
    } else {
      $scope.talkativeStr = stringifyFunc.strfy(type, val);
    }
  }
  $scope.submit = function () {
    var notAllFilled = false;
    for (var level in $scope.ratingsObj) {
      if ($scope.ratingsObj[level].length === 0){
        notAllFilled = true;
      }
    }
    if (notAllFilled) {
        alert('Please fill in all the fields!');
    }else {
      var ratingsObj = {
                        activityLevel : $scope.activityLevel,
                        spendingLevel : $scope.spendingLevel,
                        partyingLevel : $scope.partyingLevel,
                        nerdyLevel : $scope.nerdyLevel,
                        talkativeLevel : $scope.talkativeLevel
                       };
      var reqData = {ratingsObj: ratingsObj,
                     comment: $scope.comment,
                     raterUsername: information.currentUser,
                     rated: information.clickedUser
                    }
    	$http.post('/postrating', reqData).then(function(res) {
        $window.location = '#/result';
      }, function(err) {
        console.error(err);
      });

      for (var level in $scope.ratingsObj) {
        $scope.ratingsObj[level] = undefined;
      }
      $scope.comment = "";
    }
  }
});
