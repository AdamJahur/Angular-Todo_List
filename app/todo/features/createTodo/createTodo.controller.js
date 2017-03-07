angular
	.module('todo.createTodo')
	.controller('CreateTodoCtrl', CreateTodoCtrl);

function CreateTodoCtrl(todoApi) {
	var vm = this;

	vm.todo = '',
	vm.dueDate = '',
	vm.status = '',
	vm.addTodo = addTodo;

	function addTodo() {

		var newTodo = {
			todo: vm.todo,
			dueDate: vm.dueDate
		};

		todoApi.addTodo(newTodo);

		vm.todo = '';
		vm.dueDate = '';
	}
}