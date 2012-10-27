// Enter a client ID for a web application from the Google Developer Console.
// The provided clientId will only work if the sample is run directly from
// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
// In your Developer Console project, add a JavaScript origin that corresponds to the domain
// where you will be running the script.
var clientId = '81393392510.apps.googleusercontent.com';

// Enter the API key from the Google Develoepr Console - to handle any unauthenticated
// requests in the code.
// The provided key works for this sample only when run from
// https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
// To use in your own application, replace this API key with your own.
var apiKey = 'AIzaSyCwfWjVvtQhnOa3-zpTAHnbbADZGqSdF4s';

// To enter one or more authentication scopes, refer to the documentation for the API.
var scopes = 'https://www.googleapis.com/auth/tasks';

// Use a button to handle authentication the first time.
function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth,1);
}

function checkAuth() {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}


function handleAuthResult(authResult) {
    qwe = authResult;
    var authorizeButton = document.getElementById('authorize-button');
    if (authResult && !authResult.error) {
        authorizeButton.style.visibility = 'hidden';
        makeApiCall();
    } else {
        authorizeButton.style.visibility = '';
        authorizeButton.onclick = handleAuthClick;
    }
}

function handleAuthClick(event) {
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
    return false;
}

// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
    gapi.client.load('tasks', 'v1', function() {
        var request = gapi.client.tasks.tasklists.list();
        request.execute(function(resp) {
			console.log('RESP');
			console.log(resp);
			asd = resp;
			
			if(resp.error){
				alert('Sorry but your task list cannot be fetched...');
			} else {
				var lists = resp.result.items;
				
				//console.log('lists')
				//console.log(lists)
				
				var list_titles = $.map(lists, function(val, index){
					return val.title;
				});
				
				addListHeader('TODO LISTS')
				
				$.each(lists, function(idx ,list){
					var list_id = list.id;
					
					//console.log('list id');
					//console.log(list_id);
					
					var todo_request = gapi.client.tasks.tasks.list({tasklist: list_id});	
					
					todo_request.execute(function(resp, a) {
								if(resp.error){
									alert('Sorry but your task list cannot be fetched...');								
								} else {
									var todos = $.map(resp.items, function(todo, idx){
										return todo.title;
									});
									
									addList(list.title, todos);
								}
								
						//console.log('todos:');
						//console.log(resp);
						//console.log(a);
	
					});
				});
				
	            var heading = document.createElement('h1');
    	        var image = document.createElement('img');
            
        	    //image.src = resp.image.url;
            	//heading.appendChild(image);
            	//heading.appendChild(document.createTextNode(resp.displayName));
            	//document.getElementById('content').appendChild(heading);

			}
		});
    });
}

function addListHeader(title){
	$('<h1>').text(title).appendTo('body');
}

function addListSubHeader(title){
	$('<h3>').text(title).appendTo('body');
}

function addList(name, items){
	addListSubHeader(name);
	
	var list = $('<ul>');
	
	$.each(items, function(idx, val){
		var item = $('<li>').text(val);
		list.append(item);
	});
	
	list.appendTo('body');
}