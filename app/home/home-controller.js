angular.module('socialNetwork.home', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.hello = 'ZDRASTI!';
    }
    ]);