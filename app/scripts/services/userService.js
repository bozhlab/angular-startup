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
}]);