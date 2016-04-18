angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {

            var deferred = $q.defer();

            var currentUser = undefined;

            var accessToken =
                'bDGI5bzGbDxrBWydvFiJFRhLFuJaN3Y4V3-T8Po4xc1huKpfag4jv_0Swx-uJ0_uS62qQX3F_GjXUd9y8BeuZQhLiw15cCFEnJMhbXiCQsZxEVGzA1hCyk-dFCueBMw669u6fWhsVyEDpgjwiVOcuXCy3jydAV1vIXoFyq8BmlGMmCgO_OIpt38B5FGcmK1j9D9hPZksut8OYke_9SNRw8aKJqyFnI8p9pDJHrbRIrusW-ezzok86MwKV6y4XhuU-d3bfeaNlajuX1reUhoFZ0oNOs9UelgzFHE5zuF-K5shUItouczMESIogG8aiFGrJs5Ef5UN8_3zN8Fob2mNPubcY-39ep8mPYoCajjDHFUy26ysLtBxWPlEj218rWWwj2KDZLl7-LdVpeDiDBvRyoJ7wAl0w6n-YTwa_QZJj0q1zubYg3HL31TONJxZ9_h3IjWBR7oyZ3Am9TLr-OfDw_JRHzEZnQfbYNEmwCMSZf052MVkyr-XrkaidFendraj';
            $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

            $http.get(BASE_URL + 'me')
                .then(function (response) {
                    currentUser = response.data;
                    deferred.resolve(currentUser);
                });

            return {
                getCurrentUser: function () {
                    if (currentUser) {
                        return $q.when(currentUser);
                    }
                    else {
                        return deferred.promise;
                    }
                },
                isAuthenticated: function () {
                    return true;
                }
            };
        }]);