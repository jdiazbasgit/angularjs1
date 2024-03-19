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

