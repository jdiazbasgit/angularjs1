'use strict';

var app = angular.module('myApp.paises', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/paises', {
      templateUrl: 'view4/paises.html',
      controller: 'PaisesCtrl'
    });
  }])


app.controller('PaisesCtrl', function ($scope, $http) {
    $scope.valor = "resultado de valor";
    $scope.cambiar = function (dato) {
        $scope.valor = dato
    }

    $scope.paises = []
    $scope.paisSeleccionado="0"
    $scope.nomComun=""
    $scope.nomOficial=""
    $scope.capital=""
    $scope.poblacion=""
    $scope.bandera=""
    $scope.escudo=""

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
            $scope.nomComun=datos.data[0].name.common
            $scope.nomOficial=datos.data[0].name.official
            $scope.capital=datos.data[0].capital
            $scope.poblacion=datos.data[0].population
            $scope.bandera=datos.data[0].flags.png
            $scope.escudo=datos.data[0].coatOfArms.png
            
        })
    }

})
   




