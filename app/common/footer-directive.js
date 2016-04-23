angular.module('socialNetwork.common.footer', [])
    .directive('footerDirective', [function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/common/footer-directive.html'
        };
    }
    ]);