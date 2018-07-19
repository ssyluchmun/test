"use strict";
var app = angular.module('starter', ['ionic']);

app.controller('listviewcontroller', function($scope,$http,$ionicModal, $window, $state) {
    $scope.dologin = function (login) {

        firebase.auth().signInWithEmailAndPassword(login.Username, login.Password)
        .then(function(firebaseUser) {
            // Success 
            console.log(firebaseUser);
            var url = "http://" + $window.location.host + "#/merchant";
          // var url = "http://google.mu";

           window.location.href = url;
// $state.go("merchant");
        })
        
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode + "   " + errorMessage);
        });
    }
   
})//END listviewcontroller()


app.controller('merchantcontroller', function($scope,$http,$ionicModal, $window){

$scope.getValues = function(){

    console.log("blah");
   


}

})
   
    






app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('listview', {
    url: '/listview',
    templateUrl: 'templates/listview.html',
    controller:'listviewcontroller'
  })
     .state('merchant', {
    url: '/merchant',
    templateUrl: 'templates/merchant.html',
    controller:'merchantcontroller'
  })
 

  //END CONTROLLERS
   $urlRouterProvider.otherwise('/merchant');
 // $urlRouterProvider.otherwise('/merchant'); 
})
 