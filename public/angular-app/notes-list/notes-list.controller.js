angular.module('pogsApp').controller('NotesController', NotesController);


function NotesController($route, $window, notesDataFactory) {
	var vm = this;
	vm.quickFilter = '';
	vm.noteType = 'all';

	notesDataFactory.notesList().then(function(response) {
		vm.notes = response;
		for (var i = 0; i < vm.notes.length; i++) {
			vm.notes[i].editMode = false;
		}

		console.log(vm.notes);
	});

	vm.deleteNote = function(id) {
		var deleteConfirmed = $window.confirm('Are you sure you want to delete this note?');
		if (deleteConfirmed) {
			notesDataFactory.deleteNote(id).then(function(response) {
				console.log('Note deleted');
				$route.reload();
			});
		}
	};

	vm.updateNote = function(noteToUpdate) {
		var updateConfirmed = $window.confirm('Are you sure you want to update this note?');
		var updatedNote = {
			date: noteToUpdate.date,
			title: noteToUpdate.title,
			information: noteToUpdate.information,
			tags: noteToUpdate.tags,
			location: noteToUpdate.location,
			approxTime: noteToUpdate.approxTime,
			icons: noteToUpdate.icons,
			archived: noteToUpdate.archived,
			author: noteToUpdate.author
		};

		console.log(updatedNote);

		if (updateConfirmed) {
			notesDataFactory.updateNote(noteToUpdate._id, updatedNote).then(function(response) {
				console.log('Note updated');
				noteToUpdate.editMode = false;
			}).catch(function(error) {
				console.log(error);
			});
		}
	};

	vm.toggleEditMode = function(note) {
		if (note.editMode) {
			note.editMode = false;
		} else {
			note.editMode = true;
		}
	};

	vm.isEditModeOn = function(editMode) {
		return editMode;
	};

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