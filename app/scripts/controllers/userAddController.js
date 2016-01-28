myApp.controller('userAddController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    $scope.empty = {};
    $scope.user = {};

    $scope.reset = function (formAdd) {
        if (formAdd) {
            formAdd.$setPristine();
            formAdd.$setUntouched();
        }
        $scope.user = angular.copy($scope.empty);
    }
}]);