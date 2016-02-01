var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/users', {
        title: 'index',
        templateUrl: 'views/user/index.html',
        controller: 'userController'
    }).
    when('/users2', {
        title: 'index2',
        templateUrl: 'views/user/index2.html',
        controller: 'userController'
    }).
    when('/users/add', {
        templateUrl: 'views/user/add.html',
        controller: 'userAddController'
    }).
    when('/users/:id', {
        templateUrl: 'views/user/detail.html',
        controller: 'userDetailController'
    }).
    otherwise({
        redirectTo: '/users'
    });
  }]);


myApp.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        var defaultTitle = 'title';
        document.title = $route.current.title || defaultTitle;
    });
}]);