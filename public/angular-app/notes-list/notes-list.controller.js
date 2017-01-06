angular.module('pogsApp').controller('NotesController', NotesController);


function NotesController($route, $window, notesDataFactory) {
	var vm = this;
	vm.quickFilter = '';
	vm.noteType = 'all';
	vm.quickNoteData = {
		date : "",
		title : "",
		information : "",
		tags : "",
		location : "",
		approxTime : "",
		author: "Pedong",
		icons : [],
		archived : false
	};

	vm.notes = [];
	var currentDate = new Date();
	var currentDay = currentDate.getDate();
	var currentMonth = currentDate.getMonth();
	var currentYear = currentDate.getFullYear();
	vm.currentDate = new Date(currentYear, currentMonth, currentDay);

	// Load notes data
	notesDataFactory.notesList().then(function(response) {
		for (let i = 0; i < response.length; i++) {
			let note = response[i];
			let noteDate = new Date(note.date);
			// Update certain notes to archived if it already has passed
			if (!note.archived) {
				if (noteDate < vm.currentDate) {
					note.archived = true;
					notesDataFactory.updateNote(note._id, note).then(function(response) {
						console.log('Note archived');
					}).catch(function(error) {
						console.log(error);
					});
				} else {
					note.editMode = false;
					vm.notes.push(note);
				}
			}
		}
	});

	vm.addQuickNote = function() {
		var addQuickNoteConfirmed = $window.confirm('Are you sure you want to add this quick note?');
		if (addQuickNoteConfirmed) {
			// Post note to database
			notesDataFactory.postNote(vm.quickNoteData).then(function(response) {
				// Clear addAdvancedNoteData and iconSet
				vm.quickNoteData = {
					date : "",
					title : "",
					information : "",
					tags : "",
					location : "",
					approxTime : "",
					author: "Pedong",
					icons : [],
					archived : false
				};
				$route.reload();
				$window.alert('Quick Note added!');
			}).catch(function(error) {
				$window.alert('Quick Note failed to post!');
				console.log(error);
			});
		}
	};

	vm.deleteNote = function(id) {
		var deleteConfirmed = $window.confirm('Are you sure you want to delete this note?');
		if (deleteConfirmed) {
			notesDataFactory.deleteNote(id).then(function(response) {
				console.log('Note deleted');
				$route.reload();
				$window.alert('Quick Note deleted!');
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
				noteToUpdate.editMode = false;
				console.log('Note updated!');
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

	vm.setQuickNoteAuthor = function(quickNoteAuthor) {
		vm.quickNoteData.author = quickNoteAuthor;
	};

	vm.isQuickNoteAuthorSet = function(quickNoteAuthor) {
		return vm.quickNoteData.author === quickNoteAuthor;
	};

}