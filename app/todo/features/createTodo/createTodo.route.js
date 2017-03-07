angular
	.module('todo.createTodo')
	.config(createTodoConfig);

function createTodoConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
        url: '/create',
        templateUrl: 'todo/features/createTodo/createTodo.html',
        controller: 'CreateTodoCtrl',
        controllerAs: 'CreateVM'
	});
}