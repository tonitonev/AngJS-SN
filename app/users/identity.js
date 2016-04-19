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
                'lW6sD9FRCBVTe1iosnWOASjyVwabIch-x4JU6OX56HswcrJnI_EQ1OoYRJSY3J-Tr-7RF1oUpaV-CXXGmXvO4c25dLjzrmO1JJE2VwuopuEAIlGZFpmoYOPQP13tpu-ukgDcuBmfpu8irp29fRAZlPVmf0coZ2eYZjs68ZpUPkyCeaCpE0rjMh3wG3p5otZSWTrfJwAlosloY2yg9Tbav8lIW_-jdp76sbtogCoF0zyBYzypKWEJegd2C5onMSKaRnA7hR9d8667uxamkauvlGq4NHJrB68MrOcgDUXOrRJM-iJm580AlJACg3ytQsLYyzuvdxYq5Xq8nDg18As37T1XNaOYtHrdna8ZIIL0zsNMDBpHds-BsXi8GnCcJMeb8Cy6XIB-fO7CJ4SfdCkbLhm_942w24GMx2jF0lkM21amCxkZOf_y0CTD0v__Zd8Qqr6Hok29hS4CmMul9NpLnnyJl8C5cRx2ACi7cORK7-dOOcOqdCVO3IORbWs5a31W';
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