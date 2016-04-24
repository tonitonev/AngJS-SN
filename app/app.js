'use strict';

angular.module('socialNetwork', [
        'ngRoute',
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
    .constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/');
