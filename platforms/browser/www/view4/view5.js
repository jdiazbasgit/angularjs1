var app=angular.module("myApp.view5",[])
app.controller("View5Ctrl", function ($scope, $http) {

    $scope.cargaPais = (pais) => {
      var config = {
        url: "https://restcountries.com/v3.1/name/" + pais
      }
  
      $http(config).then(function (datos) {
  
        $scope.nombreComun = datos.data[0].name.common
        $scope.nombreOficial = datos.data[0].name.official
        $scope.capital = datos.data[0].capital[0]
        $scope.objetos = []
        Object.entries(datos.data[0].translations).forEach(function (traduccion) {
          var config1 = {
            url: "https://restcountries.com/v3.1/lang/" + traduccion[0]
          }
  
          $scope.paisesIdioma = []
          $http(config1).then(function (datos) {
            if (datos.status!==404) {
              paises = []
              datos.data.forEach(function (pais) {
                paises.push(pais.name.common)
              })
              $scope.paisesIdioma.push(paises)
            }
          })
  
          /*$scope.moneda=traduccion[0]
          $scope.nombreMoneda=traduccion[1].official
          $scope.simboloMoneda=traduccion[1].common*/
          $scope.objetos.push(traduccion)
        })
  
      })
    }
  })