angular.module('pogsApp', ['ngRoute', 'angular-jwt'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/notes', {
			templateUrl: 'angular-app/notes-list/notes.html',
			controller: NotesController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/notes/:id', {
			templateUrl: 'angular-app/notes-display/note.html',
			controller: NoteController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/about', {
			templateUrl: 'angular-app/about/about.html',
			access: {
				restricted: false
			}
		})
		.when('/archive', {
			templateUrl: 'angular-app/archive/archive.html',
			controller: ArchiveController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/register', {
			templateUrl: 'angular-app/register/register.html',
			controller: RegisterController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.otherwise({
			redirectTo: '/notes'
		});
}