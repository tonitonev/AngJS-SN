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
            "4hwnAt4mYLynWmAux8eHkluozSAFsB4F8t5CfFHmUnlo8tdLFak_imyOsTfWOfadjg6mPkL4Asu5oHy3wbzmL0iTR9-lQPPLqPa7SPaQyDNgiXO2ImkKej2-5ZNDNe1FYxltJce4Y5oOIybMxw4w_XSkOXW-sR32Cew3MCYzDVryJ0m6ZXkHCCTtHDXxGxJDXcqSz-la03rITh5nOC9wjqciKDN4_UPDHDm9Md_NO3_KVQZs83GI7CKxfyx1DfHy59lNF-PuQIctI9v6gwE7KxD0_KNoDM4UFvyXuninLbAIT2CharuYjhC7m3iH8-9CLNHkc0CbWuERjQu2ET8FbF_VTwaSY7iketENbq6krGYANwbNBkfUepiBjmlH62k-PBfBiDHuNUfhyHEs2MCK-dB446Fz0uNB8eoxvSi-DGiiUFVlcti06qp9vM2ApZaaFEScWgJ2o_YpMdyQPtyQeck-QdyK1iBCCntNB2GRAUCsozygSqK-2RtH1p3GrIiQ";
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