angular.module('pogsApp').factory('notesDataFactory', notesDataFactory);

function notesDataFactory($http) {
	return {
		notesList: notesList,
		notesDisplay: notesDisplay,
		postNote: postNote,
		deleteNote: deleteNote,
		updateNote: updateNote
	};

	function notesList() {
		return $http.get('/api/notes').then(complete).catch(failed);
	}

	function notesDisplay(id) {
	 	return $http.get('/api/notes/' + id).then(complete).catch(failed);
	}

	function postNote(note) {
		return $http.post('/api/notes', note).then(complete).catch(failed);
	}

	function updateNote(id, note) {
		return $http.put('/api/notes/' + id, note).then(complete).catch(failed);
	}

	function deleteNote(id) {
		return $http.delete('/api/notes/' + id).then(complete).catch(failed);
	}

	function complete(response) {
		return response.data;
	}

	function failed(error) {
		console.log(error.statusText);
	}
}