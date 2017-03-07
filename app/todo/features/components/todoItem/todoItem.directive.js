angular
    .module('todo.component.todoItem')
    .directive('todoItem', TodoItem);

function TodoItem() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: '/todo/features/components/todoItem/todoItem.html',
        controller: TodoItemCtrl,
        controllerAS: 'TodoVM',
        bindToController: true
    };
}

function TodoItemCtrl($scope, todoApi) {
    var vm = this;

    $scope.updateCompleted = updateCompleted;
    vm.todoData = {};

    $scope.$watch(function () {
        return vm.todoData;
    }, function (newValue, oldValue) {
        if (newValue) {
            vm.todoData = newValue;
            $scope.todoData = vm.todoData;
            console.log(vm.todoData);
        }
    });

    function updateCompleted(todo) {
        console.log(todo);

        todoApi.updateTodo(todo);
    }
}