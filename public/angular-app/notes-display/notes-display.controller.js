angular.module('pogsApp').controller('NoteController', NoteController);

function NoteController($route, $routeParams, $window, notesDataFactory) {
	var vm = this;
	var id = $routeParams.id;
	notesDataFactory.notesDisplay(id).then(function(response) {
		vm.note = response;
	});
}