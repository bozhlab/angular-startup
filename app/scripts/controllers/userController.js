myApp.controller('userController', ['$scope', '$http', function ($scope, $http) {
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
        $http.get('user.json').success(function (data) {
            $scope.users = data;
        });
    };
}]);