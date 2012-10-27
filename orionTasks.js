window.onload = function() {

	//plugin metadata  
	var headers = {
		name: "Orion Tasks",
		version: "1.0",
		description: "Provides synchronization of tasks with Google Tasks."
	};

	//create the plugin
	var provider = new orion.PluginProvider(headers);

	var parseTodo = function(text) {
		var lines = text.split("\n");
		
		var output = [];
		var newTodos = {}, oldTodos = {};
		var newTodosLines = [];
		var patt = new RegExp('(.*)// TODO(-[0-9])? (.*)');
		var maxNumber = 0;
		_.each(lines, function(line, lineNumber) {
			var match = patt.exec(line);
			if (match) {
				var before = match[1];
				var number = match[2];
				var comment = match[3];
				if(number) {
					number = parseInt(number.replace('-',''));
					if(number > maxNumber) maxNumber = number;
					oldTodos[number] = comment;
				}
				if(!number) {
					newTodosLines.push(lineNumber);
				}
			}
			output.push(line);
		});
		_.each(newTodosLines, function(lineNumber){
			var originalLine = output[lineNumber] + '';
			var match = patt.exec(originalLine);
			var before = match[1];
			var comment = match[3];
			var taskNumber = ++maxNumber;
			var newLineContent = before + '// TODO-' + taskNumber + ' ' + comment;
			output[lineNumber] = newLineContent;
			newTodos[taskNumber] = comment;
		});
		console.log(newTodos);
		console.log(oldTodos);
		// send requests
		
		return output.join("\n");
	};

	provider.registerServiceProvider("orion.edit.command", {
		run: function(selectedText, text, selection) {
			var toFormat;
			var selectionEmpty = selection.start === selection.end;
			if (selectionEmpty) {
				toFormat = text;
			} else {
				toFormat = selectedText;
			}
			var formatted = parseTodo(toFormat);
			if (selectionEmpty) {
				return {
					text: formatted
				};
			} else {
				return formatted;
			}
		}

	}, {
		name: "Sync TODOs",
		img: "/images/gear.gif",
		key: ["t", true]
	});


	provider.registerServiceProvider("orion.page.link", {}, {
		name: "TODO",
		id: "orion.todo.pageLink.todo",
		uriTemplate: "http://172.20.41.250/file/gogiel/orion-tasks/tasks.html,contentProvider=orion.pixlr.content"
	});

	provider.connect();
};