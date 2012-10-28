var GoogleTasks = {
	getLists: function(callback) {
		var response = {};
		checkAuth(function() {
			gapi.client.load('tasks', 'v1', function() {
				//gapi.client.load('tasks', 'v1', function() {
				var request = gapi.client.tasks.tasklists.list();
				request.execute(function(resp) {
					var lists = resp.result.items;
					var itemsCount = lists.length;
					var callbackCaller = function() {
						--itemsCount;
						if (itemsCount === 0) {
							callback(lists);
						}
					};

					$.each(lists, function(idx, list) {
						var list_id = list.id;
						var todo_request = gapi.client.tasks.tasks.list({
							tasklist: list_id
						});

						todo_request.execute(function(resp, a) {
							if (resp.error) {
								alert('Sorry but your task list cannot be fetched...');
								console.log(resp.error);
							} else {
								list._OrionItems = resp.items;
								callbackCaller();
							}
						});
					});
				});
			});
			//});
		});
	},
	getTodos: function(list) {

	},
	addTodo: function(list, title, parent, callback) {
		console.log('adding', list, title, parent, callback);
		var requestBody = {
			tasklist: list,
			resource: {
				title: title
			}
		};
		if (parent) requestBody.parent = parent;
		checkAuth(function() {
			gapi.client.load('tasks', 'v1', function() {
				//gapi.client.load('tasks', 'v1', function() {
				var request = gapi.client.tasks.tasks.insert(requestBody);
				request.execute(function(resp) {
					console.log(resp);
					if (callback) callback(resp);
				});
			});
		});
	},
	addTodos: function(list, todos, callback) {
		checkAuth(function() {
			gapi.client.load('tasks', 'v1', function() {
				_.each(todos, function(todo) {
					var requestBody = {
						tasklist: list,
						resource: {
							title: todo.title
						}
					};
					if(todo.parent) requestBody.parent = todo.parent;
					var request = gapi.client.tasks.tasks.insert(requestBody);
					request.execute(function(resp) {
						
					});
				});
				if(callback) { callback();}
			});
		});
	},
	updateAndAddTodos: function(list, newTodos, oldTodos, callback) {
	console.log('updateAndAddTodos');
	console.log(oldTodos);
		GoogleTasks.addTodos(list, newTodos, function(){
			console.log('za chwile bedzie updatowac:');
			console.log(oldTodos);
		});
	},
	getAll: function(callback) {

	}
};