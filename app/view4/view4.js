'use strict';

var app = angular.module('myApp.view4', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view4', {
      templateUrl: 'view4/view4.html',
      controller: 'View4Ctrl'
    });
  }])


app.controller('View4Ctrl', function ($scope, $http) {
    $scope.valor = "resultado de valor";
    $scope.cambiar = function (dato) {
        $scope.valor = dato
    }


    $scope.paises = []
    $scope.paisSeleccionado=0;


    $scope.cargarPaises = url => {

        var config = {
            url: url
        }

        $http(config).then(function (datos) {

            console.log(datos.data)
            $scope.paises=datos.data
        })

    }

})
   




