angular
	.module('todo.completeTodo')
	.config(completeTodoConfig);

function completeTodoConfig($stateProvider) {
	$stateProvider.state({
		name: 'complete',
		url: '/complete',
		templateUrl: 'todo/features/completeTodo/completeTodo.html',
		controller: 'CompleteTodoCtrl',
		controllerAs: 'CompleteVM'
	});
}