myApp.controller('userAddController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    $scope.empty = {};
    $scope.user = {};

    $scope.add = function (user) {
        if ($scope.formAdd.$valid) {
            userService.addUser(user).then(function (response) {
                alert(response.data);
            }).catch(function (response) {
                alert(response);
            });
        }
    };

    $scope.reset = function (formAdd) {
        if (formAdd) {
            formAdd.$setPristine();
            formAdd.$setUntouched();
        }
        $scope.user = angular.copy($scope.empty);
    }
}]);