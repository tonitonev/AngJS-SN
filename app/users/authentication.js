angular.module('socialNetwork.users.authentication', [])
    //factory-ито е сървис
    .factory('authentication', [
        '$http',
        '$cookies',
        '$q',
        '$location',
        'identity',
        'BASE_URL',
        function ($http, $cookies, $q, $location, identity, BASE_URL) {
            //console.log(BASE_URL);

            var AUTHENTICATION_COOKIE_KEY = '!__Authentication_Cookie_Key__!';

            function preserveUserData(data) {
                var accessToken = data.access_token;

                $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
                $cookies.put(AUTHENTICATION_COOKIE_KEY, accessToken);

            }

            function registerUser(user) {
                var deferred = $q.defer();

                $http.post(BASE_URL + 'Users/Register', user)
                    .then(function (response) {
                        preserveUserData(response.data);

                        identity.requestUserProfile()
                            .then(function () {
                                deferred.resolve(response.data);
                            });
                    });
                return deferred.promise;
            }

            function loginUser(user) {
                var deferred = $q.defer();

                $http.post(BASE_URL + 'Users/Login', user)
                    .then(function (response) {
                        // console.log(response.data);
                        preserveUserData(response.data);

                        identity.requestUserProfile()
                            .then(function () {
                                deferred.resolve(response.data);
                            });
                    });
                return deferred.promise;
            }

            function isAuthenticated() {
                return !!$cookies.get(AUTHENTICATION_COOKIE_KEY); //!! obrusta na true ili false
            }

            function logout() {
                $cookies.remove(AUTHENTICATION_COOKIE_KEY);
                $http.defaults.headers.common.Authorization = undefined;
                identity.removeUserProfile();
                $location.path('/');
            }

            function refreshCookie() {
                if (isAuthenticated()) {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get(AUTHENTICATION_COOKIE_KEY);
                    identity.requestUserProfile();
                }
            }

            return {
                registerUser: registerUser,
                loginUser: loginUser,
                isAuthenticated: isAuthenticated,
                refreshCookie: refreshCookie,
                logout: logout
            }
        }]);