var GoogleTasks = {
	getLists: function(callback) {
		var response = {};
		checkAuth(function() {
			gapi.client.load('tasks', 'v1', function() {
				var request = gapi.client.tasks.tasklists.list();
				request.execute(function(resp) {
					var lists = resp.result.items;
					var itemsCount = lists.length;
					var callbackCaller = function() {
						--itemsCount;
						if(itemsCount === 0) {
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
							} else {
								list._OrionItems = resp.items;
								callbackCaller();
							}
						});
					});
				});
			});
		});
	},
	getTodos: function(list) {

	},
	addTodo: function(list, parent) {

	},
	updateTodo: function(list, todo, attrs) {

	},
	getAll: function(callback) {

	}
}