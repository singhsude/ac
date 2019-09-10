'use strict';

// declare modules
angular.module('Home', []);
angular.module('Authentication', []);

angular.module('app', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies',
    'ngStorage'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
 
        .when('/1', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/1.html'
        })
	
	.when('/2', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/2.html'
        })

	.when('/3', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/3.html'
        })


	.when('/4', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/4.html'
        })


	.when('/5', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/5.html'
        })


	.when('/6', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/6.html'
        })



	.when('/7', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/7.html'
        })



	.when('/3', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/3.html'
        })


	.when('/8', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/8.html'
        })


	.when('/9', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/9.html'
        })


	.when('/10', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/10.html'
        })


	.when('/11', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/11.html'
        })


	.when('/12', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/12.html'
        })


	.when('/13', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/13.html'
        })

	.when('/14', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/14.html'
        })
	.when('/15', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/15.html'
        })
	.when('/16', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/16.html'
        })
	.when('/17', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/17.html'
        })
	.when('/18', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/18.html'
        })
        .otherwise({ redirectTo: '/16' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$localStorage', '$sessionStorage', '$http',
    function ($rootScope, $location, $cookieStore, $localStorage, $sessionStorage, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            } else if ($location.path() !== '/login' && $rootScope.globals.currentUser) {
		if($location.path() !== '/15' && $location.path() !== '/17' && $location.path() !== '/18' && $location.path() !== '/menu'  && $location.path() !== '/login')
			$rootScope.globals.currentUser.screen = $location.path();
		if (($location.path() == '/menu' || $location.path() == '/15' || $location.path() == '/16' || $location.path() == '/17' || $location.path() == '/18') && !$rootScope.globals.currentUser.isMenu) {
			if($rootScope.globals.currentUser.screen == '/16'){
				$rootScope.globals.currentUser.screen = '/15';
				$rootScope.globals.currentUser.isMenu = null;
				$location.path('/16'); }else{$location.path('/15');
			$rootScope.globals.currentUser.isMenu = "1";}
            	} else if ($location.path() == '/menu' && $rootScope.globals.currentUser.isMenu == "1") { 
			$location.path($rootScope.globals.currentUser.screen); $rootScope.globals.currentUser.isMenu = null; $rootScope.globals.currentUser.screen = null; 
		}
            }
        });
    }]);