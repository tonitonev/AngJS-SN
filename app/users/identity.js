angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {

            var deferred = $q.defer();

            var currentUser = undefined;

            //comment this initially to get acces token logged on console
            var accessToken =
                '5zvTV1_-iSv_LVLz9PApQUNu2zErlBHNwbSB3j67tP6M39RFo2NRMXQHGEqV1FUUy_e0tdSY4sQ7NnV2JDGzOdjCQMpI7hMvsAqQFzTb61mIHvDPwTKPUYCAWnrmWjd-rZpIsX1dOcPDFb8lK9NtzabiHLW64BrmLfxRhx96QSQfwiSFw-bpz9ZRLDLIXL-LRS2OyjLlAJci9_BfrocQIAjrOz0boCjGwOT3J5neAfcgqKqktKqSsHGCznLJxqZfabsfscZeKak09uDh-vMWBeZDI_b2prfPIWExqBesXnjHvSL5mTwmcY83xdo1TDlnjZWdq4q_dd3BKh8hc9sKe3yRMoGVfG9vyZ4exX3an8jnaDMAGxvpRpB2gP_XeO__ZcbRt-LheYz9MSGhuWwUhl1ByiWbqc5rdRGuDSrgPDhejZ0IUQZ6_oFq5OthcyOm9PhPyaNxP9O3aoYHNXBGtu4jmyv9WSQpFo4lnivMpbLxe4qgmI3W0p87sFhmgSnO';
            //comment this initially to get acces token logged on console
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