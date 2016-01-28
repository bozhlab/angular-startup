myApp.controller('userController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    $scope.message = 'hello';
    $scope.users = [
        {
            'name': 'Anthony "Tony" Edward',
            'lastName': 'Stark'
        },
        {
            'name': 'Thor',
            'lastName': 'Odinson'
        },
        {
            'name': 'Henry Jonathan "Hank"',
            'lastName': 'Pym'
        },
        {
            'name': 'Robert Bruce',
            'lastName': 'Banner'
        },
        {
            'name': 'Janet van',
            'lastName': 'Dyne'
        }
  ];

    $scope.loadUser = function () {
        userService.getUserList().then(function (response) {
            $scope.users = response.data;
        });
    };
}]);