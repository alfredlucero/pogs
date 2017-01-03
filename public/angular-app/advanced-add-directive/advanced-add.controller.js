angular.module('pogsApp').controller('AdvancedAddController', AdvancedAddController);

function AdvancedAddController($http, $route, notesDataFactory) {
	var vm = this;
	vm.iconSet = new Set();

	vm.addAdvancedNoteData = {
		date : "",
		title : "",
		information : "",
		tags : "",
		location : "",
		approxTime : "",
		author: "",
		icons : [],
		archived : false
	};

	vm.addAdvancedNote = function() {
		console.log(vm.addAdvancedNoteData);

		for (var icon of vm.iconSet) {
			vm.addAdvancedNoteData.icons.push(icon);
		}

		// Post note to database
		notesDataFactory.postNote(vm.addAdvancedNoteData).then(function(response) {
			// Clear addAdvancedNoteData and iconSet
			vm.addAdvancedNoteData = {
				date : "",
				title : "",
				information : "",
				tags : "",
				location : "",
				approxTime : "",
				author: "",
				icons : [],
				archived : false
			};
			vm.iconSet.clear();
			$route.reload();
		}).catch(function(error) {
		 console.log(error);
		});

	};

	vm.setAuthor = function(author) {
		vm.addAdvancedNoteData.author = author;
	};

	vm.isAuthorSet = function(author) {
		return vm.addAdvancedNoteData.author === author;
	};

	vm.toggleIcon = function(icon) {
		if (vm.iconSet.has(icon)) {
			vm.iconSet.delete(icon);
		} else {
			vm.iconSet.add(icon);
		}
	};

	vm.isIconToggled = function(icon) {
		return vm.iconSet.has(icon);
	};

}