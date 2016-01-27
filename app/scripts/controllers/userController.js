myApp.controller('userController', ['$scope', function ($scope) {
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
}]);