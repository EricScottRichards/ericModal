var app = angular.module('directive', ['ngRoute', 'ui.bootstrap']);
app.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'app/home.html',
    controller: 'homeCtrl'
  });
});
