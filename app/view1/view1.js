'use strict';

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', function ($scope) {

    $scope.texto = "fsgdfsgdfgfd"

    $scope.personas=[{ nombre: 'alejandro', dni: '555555' },
      { nombre: 'pepe', dni: '12345' },
       { nombre: 'luis', dni: '34567' },
       { nombre: 'felipe', dni: '9875' }]
  });