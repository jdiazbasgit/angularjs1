'use strict';

var app = angular.module('myApp.view3', ['ngRoute'])


app.controller('View3Ctrl', function ($scope, $http) {
    $scope.valor = "resultado de valor";
    $scope.cambiar = function (dato) {
        $scope.valor = dato
    }


    $scope.paises = []


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
   




