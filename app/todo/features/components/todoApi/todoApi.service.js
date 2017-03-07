angular
	.module('todo.service.todoApi')
	.service('todoApi', TodoApiService);

function TodoApiService($http) {
	return {
		getTodo: function (todos) {
			$http
				.get('/api')
				.then(function (response) {
					response.data.forEach(function (item) {
						todos.push(item);
					});
				});
		},
		addTodo: function (newTodo) {
			$http.post('/api',
				newTodo
			).then(function (response) {
				console.log("new Todo added");
			}).catch(function (err) {
				console.log(err);
			});
		},
		updateTodo: function (todo) {
			$http.put('/api',
				todo
			).then(function (res) {
				console.log(res);
			}, function (err) {
				console.log(err);
			});
		}
	};
}

