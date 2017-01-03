angular.module('pogsApp', ['ngRoute'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/notes', {
			templateUrl: 'angular-app/notes-list/notes.html',
			controller: NotesController,
			controllerAs: 'vm'
		})
		.when('/notes/:id', {
			templateUrl: 'angular-app/notes-display/note.html',
			controller: NoteController,
			controllerAs: 'vm'
		})
		.when('/about', {
			templateUrl: 'angular-app/about/about.html'
		})
		.otherwise({
			redirectTo: '/notes'
		});
}