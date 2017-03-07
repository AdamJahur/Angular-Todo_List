angular
    .module('todo.listTodo')
    .config(listTodoConfig);

function listTodoConfig($stateProvider) {
    $stateProvider.state({
        name: 'list',
        url: '/',
        templateUrl: 'todo/features/listTodo/listTodo.html',
        controller: 'ListTodoCtrl',
        controllerAs: 'ListVM'
    });
}