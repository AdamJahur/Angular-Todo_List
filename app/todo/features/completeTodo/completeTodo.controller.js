angular	
	.module('todo.completeTodo')
	.controller('CompleteTodoCtrl', CompleteTodoCtrl);

function CompleteTodoCtrl(todoApi) {
	var vm = this;
	vm.todos = [];
	todoApi.getTodos(vm.todos);
}