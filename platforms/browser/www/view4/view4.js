var app = angular.module('myApp.view4', ['ngRoute'])
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl1'
  });
}])
app.controller("View4Ctrl1", function ($http, $scope) {
  $scope.paisSeleccionado = "0"
  $scope.cargarPaises = url => {

    var config = {
      url: url
    }

    $http(config).then(function (datos) {


      $scope.paises = datos.data
    })


  }
  $scope.cargarPaises("https://restcountries.com/v3.1/region/europe")
})

app.controller("View4Ctrl2", function ($scope, $http) {

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