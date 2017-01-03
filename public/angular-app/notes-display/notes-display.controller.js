angular.module('pogsApp').controller('NoteController', NoteController);

function NoteController($routeParams, notesDataFactory) {
	var vm = this;
	var id = $routeParams.id;
	notesDataFactory.notesDisplay(id).then(function(response) {
		vm.note = response;
	});
}