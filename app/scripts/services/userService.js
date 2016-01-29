myApp.service('userService', ['$http', '$q', function ($http, $q) {
    this.getUserList = function () {
        var deferred = $q.defer();
        deferred.resolve($http.get('api/user.json'));
        return deferred.promise;
    }

    this.getUserById = function (id) {
        var deferred = $q.defer();
        deferred.resolve($http.get('api/' + id + '.json'));
        return deferred.promise;
    }

    this.addUser = function (user) {
        // Simple GET request example:
        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: '/add',
            data: user
        }).success(function (data) {
            if (data) {
                deferred.resolve(data);
            } else {
                deferred.reject(data);
            }
        }).error(function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }
}]);