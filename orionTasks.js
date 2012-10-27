window.onload = function() {

	//plugin metadata
	var headers = {
		name: "Orion Tasks",
		version: "1.0",
		description: "Provides synchronization of tasks with Google Tasks."
	};

	//create the plugin
	var provider = new orion.PluginProvider(headers);

	provider.registerServiceProvider("orion.edit.command", {
		run: function(text) {
			return text.toUpperCase();
		}
	}, {
		name: "UPPERCASE",
		img: "/images/gear.gif",
		key: ["u", true]
	});



	provider.registerServiceProvider("orion.page.content", {}, {
		id: "orion.pixlr.content",
		name: "Pixlr",
		uriTemplate: "http://172.20.41.250/file/gogiel/orion-tasks/tasks.html,contentProvider=orion.pixlr.content"
		});
		
	provider.registerServiceProvider("orion.page.link", {}, {
		name: "TODO",
		id: "orion.todo.pageLink.todo",
		uriTemplate: "http://172.20.41.250/file/gogiel/orion-tasks/tasks.html,contentProvider=orion.pixlr.content"
	});





	provider.connect();
	};