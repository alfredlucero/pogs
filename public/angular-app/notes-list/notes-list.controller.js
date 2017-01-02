angular.module('pogsApp').controller('NotesController', NotesController);


function NotesController(notesDataFactory) {
	var vm = this;
	vm.quickFilter = '';
	vm.noteType = 'all';

	notesDataFactory.notesList().then(function(response) {
		console.log(response);
		vm.notes = response;
	});

	vm.pedongPogsFilter = function(note) {
		return note.author === 'Pedong' || note.author === 'Pogs';
	};

	vm.ginginPogsFilter = function(note) {
		return note.author === 'Gingin' || note.author === 'Pogs';
	};

	vm.pogsFilter = function(note) {
		return note.author === 'Pogs';
	};

	vm.setNoteType = function(noteType) {
		vm.noteType = noteType;
	};

	vm.isNoteTypeSet = function(noteType) {
		return vm.noteType === noteType;
	};
}