angular.module('pogsApp').controller('ArchiveController', ArchiveController);

function ArchiveController($http, $route, notesDataFactory) {
	var vm = this;
	vm.quickFilter = '';
	vm.noteType = 'all';
	vm.notes = [];

	// Load notes data
	notesDataFactory.notesList().then(function(response) {
		for (let i = 0; i < response.length; i++) {
			let note = response[i];
			if (note.archived) {
				vm.notes.push(note);
			}
		}
	});

	vm.pedongPogsFilter = function(note) {
		return (note.author === 'Pedong' || note.author === 'Pogs');
	};

	vm.ginginPogsFilter = function(note) {
		return (note.author === 'Gingin' || note.author === 'Pogs');
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