'use strict';

var app = angular.module('myApp.view4', ['ngRoute'])


app.controller('View4Ctrl', function ($scope, $http) {

    $scope.paises = []
    $scope.paisSeleccionado="0"
    $scope.nombreComun=""
    $scope.nombreOficial=""
    $scope.capital=""
    $scope.poblacion=""
    $scope.bandera=""
    $scope.escudo=""
    //$scope.datosDelPais = null;

    $scope.cargarPaises = url => {

        var config = {
            url: url
        }

        $http(config).then(function (datos) {

            console.log(datos.data)
            $scope.paises=datos.data
        })

    }

    $scope.cargaPais=()=>{
        var configPais = {
            url:`https://restcountries.com/v3.1/name/${$scope.paisSeleccionado}`
        }
          
        var response=$http(configPais).then(datos=>{
            $scope.nombreComun=datos.data[0].name.common
            $scope.nombreOficial=datos.data[0].name.official
            $scope.capital=datos.data[0].capital
            $scope.poblacion=datos.data[0].population
            $scope.bandera=datos.data[0].flags.png
            $scope.escudo=datos.data[0].coatOfArms.png
            
        })
    }

    /*$scope.$watch('paisSeleccionado', function(valor) {
        if (valor) {
            $scope.datosDelPais = $scope.paises.find(pais => pais.name.common === valor);
        } else {
            $scope.datosDelPais = null;
        }
    });*/

})