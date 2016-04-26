'use strict';

angular.module('socialNetwork', [
        'ngRoute',
        'ngCookies',
        'socialNetwork.common.validation',
        'socialNetwork.common',
        'socialNetwork.common.footer',
        'socialNetwork.home',
        'socialNetwork.newsFeed',
        'socialNetwork.users.identity'

    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    .run(['$rootScope', '$location', 'authentication', function ($rootScope, $location, authentication) {
        $rootScope.$on('routeChangeError', function (ev, current, previous, rejection) {
           //doesn't work
            if (rejection == 'Unauthorized Access') {
                $location.path('/');
            }
        });
        //console.log(authentication);
        authentication.refreshCookie()
    }])
    .constant('jQuery', $)
    .constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');
