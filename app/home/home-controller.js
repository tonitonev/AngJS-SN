angular.module('socialNetwork.home', [
    'socialNetwork.users.authentication'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', [
        '$scope',
        '$location',
        'authentication',
        function ($scope,$location, authentication) {

            $scope.first = 'pesho';
            $scope.login = function (user) {
            //console.log(user);
            authentication.loginUser(user);
        };

        $scope.register = function (user) {
            //console.log(user);
            authentication.registerUser(user)
                .then(function(registeredUser){
                console.log(registeredUser);
                });
        }
    }
    ]);