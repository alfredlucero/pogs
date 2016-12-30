angular.module('pogsApp', ['ngRoute'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'angular-app/main/main.html',
			controller: MainController,
			controllerAs: 'vm'
		})
		.when('/notes', {
			templateUrl: 'angular-app/notes/notes.html',
			controller: NotesController,
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo: '/'
		});
}