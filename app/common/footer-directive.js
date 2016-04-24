angular.module('socialNetwork.common.footer', [])
    .directive('footer', [function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                pesho: '='
            },
            templateUrl: 'app/common/footer-directive.html'
        };
    }
    ]);