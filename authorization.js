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
var _orion_super_firstCallback = function(){};

function handleClientLoad() {
	console.log('handleClientLoad');
    gapi.client.setApiKey(apiKey);
    setTimeout(checkAuth,1);
}

function checkAuth(callback) {
	if(!callback) callback = function(){console.log('pusty callback');};
	console.log('check auth');
	gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, callback);
}
