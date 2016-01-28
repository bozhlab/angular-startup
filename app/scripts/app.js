var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/users', {
        templateUrl: 'views/user/index.html',
        controller: 'userController'
    }).
    otherwise({
        redirectTo: '/users'
    });
  }]);