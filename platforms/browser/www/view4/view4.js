var app = angular.module('myApp.view4', ['ngRoute'])
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view4', {
      templateUrl: 'view4/view4.html',
      controller: 'View4Ctrl'
    });
  }])
app.controller("View4Ctrl",function($scope,$location){
    $scope.irA2 = function() {
        $location.url('/view2/' + "spain");
      };
      
})