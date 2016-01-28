myApp.controller('userDetailController', ['$scope', '$routeParams', 'userService', function ($scope, $routeParams, userService) {
    $scope.width = '220';
    $scope.height = '220';
    $scope.user = {};
    userService.getUserById($routeParams.id).then(function (response) {
        $scope.user = response.data;
    });
}]);