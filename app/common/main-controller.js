angular.module('socialNetwork.common', [])
    .controller('MainCtrl', [
        '$scope',
        '$location',
        'authentication',
        'identity',
        function ($scope, $location, authentication, identity) {
            identity.getCurrentUser()
                .then(function (user) {
                    //debugger;
                    $scope.currentUser = user;
                    $scope.isAuthenticated = true;
                });

            $scope.logout = function () {
                $scope.isAuthenticated = false;
                authentication.logout();
            };
        }]);