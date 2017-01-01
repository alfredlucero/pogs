angular.module('pogsApp').controller('NotesController', NotesController);


function NotesController(notesDataFactory) {
	var vm = this;
	vm.quickFilter = '';

	notesDataFactory.notesList().then(function(response) {
		console.log(response);
		vm.notes = response;
	});

	vm.pedongPogsFilter = function(note) {
		return note.author === 'Pedong' || note.author === 'Pogs';
	};

	vm.pedongFilter = function(note) {
		return note.author === 'Pedong';
	};

	vm.ginginPogsFilter = function(note) {
		return note.author === 'Gingin' || note.author === 'Pogs';
	};

	vm.ginginFilter = function(note) {
		return note.author === 'Gingin';
	};
}