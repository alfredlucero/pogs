angular.module('pogsApp', ['ngRoute'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/notes', {
			templateUrl: 'angular-app/notes-list/notes.html',
			controller: NotesController,
			controllerAs: 'vm'
		})
		.when('/about', {
			templateUrl: 'angular-app/about/about.html'
		})
		.otherwise({
			redirectTo: '/notes'
		});
}