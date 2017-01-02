angular.module('pogsApp').directive('advancedAddDirective', advancedAddDirective);

function advancedAddDirective() {
	return {
		restrict: 'E',
		templateUrl: 'angular-app/advanced-add-directive/advanced-add-directive.html',
		controller: AdvancedAddController,
		controllerAs: 'vm',
		access: {
			restricted: false
		}
	};
}
