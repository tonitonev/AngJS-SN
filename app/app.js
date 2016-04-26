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
    .run(['authentication', function (authentication) {
        //console.log(authentication);
        authentication.refreshCookie()
    }
    ])
    .constant('jQuery', $)
    .constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');
