var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/users', {
        templateUrl: 'views/user/index.html',
        controller: 'userController'
    }).
    when('/users/:id', {
        templateUrl: 'views/user/detail.html',
        controller: 'userDetailController'
    }).
    otherwise({
        redirectTo: '/users'
    });
  }]);