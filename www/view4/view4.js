var app = angular.module('myApp.view4', ['ngRoute'])
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl1'
  });
}])
app.controller("View4Ctrl1", function ($rootScope, $http, $scope) {

  $scope.cargarPaises = url => {
    $rootScope.paisSeleccionado = "0"
    var config = {
      url: url
    }

    $http(config).then(function (datos) {


      $scope.paises = datos.data
    })


  }
  $scope.cargarPaises("https://restcountries.com/v3.1/region/europe")
})

app.controller("View4Ctrl2", function ($rootScope, $scope, $http) {

  $scope.cargaPais=(pais)=>{
    var config = {
      url: "https://restcountries.com/v3.1/name/" + pais
    }

    $http(config).then(function (datos) {

      $scope.nombreComun = datos.data[0].name.common
      $scope.nombreOficial = datos.data[0].name.official
      $scope.capital = datos.data[0].capital

    })
  }
})