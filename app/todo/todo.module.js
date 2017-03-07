angular
    .module('todo', [
        'ui.router',
        'todo.listTodo',
        'todo.createTodo',
        'todo.completeTodo',
        'todo.component.navbar',
        'todo.component.todoItem',
        'todo.service.todoApi'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}