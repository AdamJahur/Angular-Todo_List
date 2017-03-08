angular
	.module('todo.listTodo')
	.controller('ListTodoCtrl', ListTodoCtrl);

function ListTodoCtrl() {
	var vm = this;
	vm.currentDate = getTodaysDate();


	vm.todos = [];

	todoApi.getTodos(vm.todos);
	
}

function getTodaysDate() {
	var currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);
	return currentDate;
}