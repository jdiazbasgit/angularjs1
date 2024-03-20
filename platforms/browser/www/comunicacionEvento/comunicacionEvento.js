var app = angular.module("myApp.comunicacionEvento", [])
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/comunicacionEvento', {
        templateUrl: 'comunicacionEvento/comunicacionEvento.html',
        controller: 'ControladorPadre'
    });
}])

app.directive('generales', [() => {
    return{
        restrict: 'E',
        template:'<h1>{{nombreComun}}</h1><h1>{{nombreOficial}}</h1><h1>{{capital}}</h1> <h1>{{poblacion}}</h1><h1 ng-repeat="moneda in monedas">{{moneda[1].name}} - {{moneda[1].symbol}}</h1>'
    };
}])

app.controller("ControladorPadre", function ($http, $scope) {

    $scope.nombreComun = ""
    $scope.nombreOficial = ""
    $scope.capital = ""
    $scope.poblacion = ""
    $scope.monedas = []

    $scope.area = 0
    $scope.fronteras = []

    $scope.bandera = ""
    $scope.escudo = ""
    $scope.pais = ""
    $scope.cargarPais = paisSeleccionado => {
        $scope.pais = paisSeleccionado;


        let config = {
            url: "https://restcountries.com/v3.1/name/" + $scope.pais
        }
        $http(config).then(datos => {
            $scope.nombreComun = datos.data[0].name.common
            $scope.nombreOficial = datos.data[0].name.official
            $scope.capital = datos.data[0].capital[0]
            $scope.poblacion = datos.data[0].population
            $scope.monedas = []
            Object.entries(datos.data[0].currencies).forEach(moneda => {
                $scope.monedas.push(moneda);
            })
            $scope.area = datos.data[0].area
            $scope.fronteras = []
            datos.data[0].borders.forEach(frontera => {

                let config = {
                    url: "https://restcountries.com/v3.1/alpha/" + frontera
                }
                $http(config).then(datos => {
                    $scope.fronteras.push(datos.data[0].name.common)
                })
            })
            $scope.bandera = datos.data[0].flags.svg
            $scope.escudo = datos.data[0].coatOfArms.svg
        })
    }
})
app.controller("ControladorHijo", ($scope, $http) => {
    $scope.paisSeleccionado = "0"
    $scope.paises = []
    $scope.cambiarPais = () => {
        $scope.cargarPais($scope.paisSeleccionado)

    }
    let config = {
        url: "https://restcountries.com/v3.1/region/europe"
    }

    $http(config).then(datos => {
        datos.data.forEach(pais => {
            $scope.paises.push(pais)
        })

    })

})