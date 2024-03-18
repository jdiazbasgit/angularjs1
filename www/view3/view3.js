'use strict';

var app = angular.module('myApp.view3', ['ngRoute'])


app.controller('View3Ctrl', function ($scope, $http,$location) {
    $scope.valor = "resultado de valor";
    $scope.cambiar = function (dato) {
        $scope.valor = dato
    }


    $scope.paises = []
    $scope.paisSeleccionado="0"
    $scope.nombreComun=""
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

            console.log(datos.data)
            $scope.paises=datos.data
        })
        

    }
    $scope.cargaPais=function(){

        //$location.url="/generales/"+$scope.paisSeleccionado
        $location.url("/generales/"+$scope.paisSeleccionado)

        
       /* var configPais = {
            url:`https://restcountries.com/v3.1/name/${$scope.paisSeleccionado}`
        }
          
        var response=$http(configPais).then(datos=>{
            $scope.nombreComun=datos.data[0].name.common
            $scope.nombreOficial=datos.data[0].name.official
            $scope.capital=datos.data[0].capital
            $scope.poblacion=datos.data[0].population
            $scope.bandera=datos.data[0].flags.png
            $scope.escudo=datos.data[0].coatOfArms.svg
            
        })*/
    }

})
   




