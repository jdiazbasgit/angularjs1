'use strict';

angular.module('myApp.generales', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/generales/:pais', {
    templateUrl: 'generales/generales.html',
    controller: 'GeneralesCtrl'
  });
}])

.controller('GeneralesCtrl', function($scope,$routeParams,$http) {
 
    var config = {
        url: "https://restcountries.com/v3.1/name/"+$routeParams.pais
    }

    $http(config).then(function (datos) {

        $scope.nombreComun=datos.data[0].name.common
        $scope.nombreOficial=datos.data[0].name.official
        $scope.capital=datos.data[0].capital
    
})
})