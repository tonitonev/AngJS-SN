angular.module('socialNetwork.common.footer', [])
    .directive('footerDirective', [function () {
        return {
            restrict: 'A',
            templateUrl: 'app/common/footer-directive.html'
        };
    }
    ]);