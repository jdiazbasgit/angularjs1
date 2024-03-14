'use strict';

var app = angular.module('myApp.view4', ['ngRoute'])


app.controller('View4Ctrl', function ($scope, $http) {

    $scope.paises = []
    $scope.datosDelPais = null;

    $scope.cargarPaises = url => {

        var config = {
            url: url
        }

        $http(config).then(function (datos) {

            console.log(datos.data)
            $scope.paises=datos.data
        })

    }

    $scope.$watch('paisSeleccionado', function(valor) {
        if (valor) {
            $scope.datosDelPais = $scope.paises.find(pais => pais.name.common === valor);
        } else {
            $scope.datosDelPais = null;
        }
    });

})