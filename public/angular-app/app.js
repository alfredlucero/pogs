angular.module('pogsApp', ['ngRoute'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'angular-app/main/main.html',
			controller: MainController,
			controllerAs: 'vm'
		})
		.when('/about', {
			templateUrl: 'angular-app/about/about.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}