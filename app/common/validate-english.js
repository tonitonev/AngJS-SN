angular.module('socialNetwork.common.validation', [])
    .directive('validate-english', [function () {

        return {
            restrict: 'A',
            link: function (scope, element) {
                element.on('click', function () {
                    console.log('Clicked!');
                });
            }
        }
    }
    ]);