angular
	.module('todo.component.navbar')
	.directive('navbar', Navbar);

function Navbar() {
	return {
		restrict: 'E',
		scope: {
			navDate: '@'
		},
		templateUrl: '/todo/features/components/navbar/navbar.html',
		controller: NavbarCtrl,
		controllerAs: 'NavbarVM',
		bindToController: true
	};
}

function NavbarCtrl() {
	
}
