'use strict';

var app = angular.module('myApp.paises', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/paises', {
      templateUrl: 'paises/paises.html',
      controller: 'paisesCtrl'
    });
  }])

app.controller('paisesCtrl', function ($scope, $http) {
    $scope.paises = []
    $scope.pais="0"
    $scope.nombre=""
    $scope.nombreOficial=""
    $scope.capital=""
    $scope.poblacion=""
    $scope.bandera=""
    $scope.escudo=""


    $scope.cargarPaises = url => {
        var config = {
            url: url
        }

        $http(config).then(function (datos) {
            $scope.paises=datos.data

        })

    }

    $scope.cargarPais = () => {
        var config = {
            url:`https://restcountries.com/v3.1/name/${$scope.pais}`
        }

        var response = $http(config).then(datos => {
            $scope.nombre = datos.data[0].name.common
            $scope.nombreOficial = datos.data[0].name.official
            $scope.capital = datos.data[0].capital
            $scope.poblacion = datos.data[0].population
            $scope.bandera = datos.data[0].flags.png
            $scope.escudo = datos.data[0].coatOfArms.png

        })

    }

})