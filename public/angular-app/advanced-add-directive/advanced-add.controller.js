angular.module('pogsApp').controller('AdvancedAddController', AdvancedAddController);

function AdvancedAddController($http, $window, notesDataFactory) {
	var vm = this;
	vm.advancedAddData = {
		date : "",
		title : "",
		information : "",
		tags : "",
		location : "",
		approxTime : "",
		author: "",
		icons : []
	};

	vm.setAuthor = function(author) {
		vm.advancedAddData.author = author;
	};

	vm.isAuthorSet = function(author) {
		return vm.advancedAddData.author === author;
	};

}