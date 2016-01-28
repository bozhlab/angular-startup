myApp.service('userService', ['$http', '$q', function ($http, $q) {
    this.getUserList = function () {
        var deferred = $q.defer();
        deferred.resolve($http.get('user.json'));
        return deferred.promise;
    }
}]);