myApp.controller('userController', ['$scope', '$http', '$location', 'userService', function ($scope, $http, $location, userService) {
    $scope.message = 'hello';
    $scope.users = [
        {
            'id': '1',
            'name': 'Anthony "Tony" Edward',
            'lastName': 'Stark'
        },
        {
            'id': '2',
            'name': 'Thor',
            'lastName': 'Odinson'
        },
        {
            'id': '3',
            'name': 'Henry Jonathan "Hank"',
            'lastName': 'Pym'
        },
        {
            'id': '4',
            'name': 'Robert Bruce',
            'lastName': 'Banner'
        },
        {
            'id': '5',
            'name': 'Janet van',
            'lastName': 'Dyne'
        }
  ];

    $scope.loadUser = function () {
        userService.getUserList().then(function (response) {
            $scope.users = response.data;
        });
    };

    $scope.addUser = function () {
        $location.path("/users/add");
    };
}]);