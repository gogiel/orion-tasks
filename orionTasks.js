var authFunc = (function(){
	var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=null,g=window,h="push",j="replace",l="length";var n=g,s=document,w=n.location,x=function(){},A=/\[native code\]/,C=function(a,b,c){return a[b]=a[b]||c},D=function(a){for(var b=0;b<this[l];b++)if(this[b]===a)return b;return-1},E=function(){var a;if((a=Object.create)&&A.test(a))a=a(f);else{a={};for(var b in a)a[b]=void 0}return a},F=C(n,"gapi",{});var G;G=C(n,"___jsl",E());C(G,"I",0);C(G,"hel",10);var H=function(){var a=w.href,b;if(G.dpo)b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b},J=function(a){return C(C(G,"H",E()),a,E())};var K=C(G,"perf",E()),M=C(K,"g",E()),aa=C(K,"i",E());C(K,"r",[]);E();E();var N=function(a,b,c){var e=K.r;"function"===typeof e?e(a,b,c):e[h]([a,b,c])},P=function(a,b,c){b&&0<b[l]&&(b=O(b),c&&0<c[l]&&(b+="___"+O(c)),28<b[l]&&(b=b.substr(0,28)+(b[l]-28)),c=b,b=C(aa,"_p",E()),C(b,c,E())[a]=(new Date).getTime(),N(a,"_p",c))},O=function(a){return a.join("__")[j](/\./g,"_")[j](/\-/g,"_")[j](/\,/g,"_")};var Q=E(),R=[],S;S={a:"callback",g:"sync",e:"config",c:"_c",d:"h",l:"platform",i:"jsl",TIMEOUT:"timeout",f:"ontimeout",k:"mh",j:"u"};R[h]([S.i,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=C(G,b,[]).concat(c):C(G,b,c)}if(b=a[S.j])a=C(G,"us",[]),a[h](b),(b=/^https:(.*)$/.exec(b))&&a[h]("http:"+b[1])}]);var T=decodeURI("%73cript");Q.m=function(a){var b=G.ms||"https://apis.google.com";a=a[0];var c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[j](/^\//,"")};
var U=function(a){return a.join(",")[j](/\./g,"_")[j](/-/g,"_")},V=function(a,b){for(var c=[],e=0;e<a[l];++e){var d=a[e];d&&0>D.call(b,d)&&c[h](d)}return c},ba=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ca=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,da=/\/cb=/g,ea=/\/\//g,X=function(a){var b=s.createElement(T);b.setAttribute("src",a);b.async="true";a=s.getElementsByTagName(T)[0];a.parentNode.insertBefore(b,a)},Z=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[S.a]=b);var e=c,d=e&&e[S.c];if(d)for(var k=
0;k<R[l];k++){var m=R[k][0],p=R[k][1];p&&Object.prototype.hasOwnProperty.call(d,m)&&p(d[m],a,e)}e=a?a.split(":"):[];if(!(d=c[S.d]))if(d=H(),!d)throw"Bad hint";k=d;m=C(G,"ah",E());if(!m["::"]||!e[l])Y(e||[],c,k);else{d=[];for(p=f;p=e.shift();){var r=p.split("."),r=m[p]||m[r[1]&&"ns:"+r[0]||""]||k,v=d[l]&&d[d[l]-1]||f,y=v;if(!v||v.hint!=r)y={hint:r,b:[]},d[h](y);y.b[h](p)}var B=d[l];if(1<B){var z=c[S.a];z&&(c[S.a]=function(){0==--B&&z()})}for(;e=d.shift();)Y(e.b,c,e.hint)}},Y=function(a,b,c){var e=
a.sort();a=[];for(var d=void 0,k=0;k<e[l];k++){var m=e[k];m!=d&&a[h](m);d=m}a=a||[];var p=b[S.a],r=b[S.e],d=b[S.TIMEOUT],v=b[S.f],y=f,B=!1;if(d&&!v||!d&&v)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=C(J(c),"r",[]).sort(),z=C(J(c),"L",[]).sort(),I=[].concat(e),W=function(a,b){if(B)return 0;n.clearTimeout(y);z[h].apply(z,q);var d=((F||{}).config||{}).update;d?d(r):r&&C(G,"cu",[])[h](r);if(b){P("me0",a,I);try{$(function(){var a;a=c===H()?C(F,"_",E()):E();
a=C(J(c),"_",a);b(a)})}finally{P("me1",a,I)}}p&&p();return 1};0<d&&(y=n.setTimeout(function(){B=!0;v()},d));var q=V(a,z);if(q[l]){var q=V(a,e),t=C(G,"CP",[]),u=t[l];t[u]=function(a){if(!a)return 0;P("ml1",q,I);var b=function(){t[u]=f;return W(q,a)};if(0<u&&t[u-1])t[u]=b;else for(b();(b=t[++u])&&b(););};if(q[l]){var L="loaded_"+G.I++;F[L]=function(a){t[u](a);F[L]=f};a=c.split(";");a=(d=Q[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[j]("__features__",U(q))[j](/\/$/,"")+(e[l]?"/ed=1/exm="+U(e):"")+
("/cb=gapi."+L);k=d.match(ea);m=d.match(da);if(!m||!(1===m[l]&&ca.test(d)&&ba.test(d)&&k&&1===k[l]))throw"Bad URL "+a;e[h].apply(e,q);P("ml0",q,I);b[S.g]||n.___gapisync?(b=a,"loading"!=s.readyState?X(b):s.write("<"+T+' src="'+encodeURI(b)+'"></'+T+">")):X(a)}else t[u](x)}else W(q)};var $=function(a){if(G.hee&&0<G.hel)try{return a()}catch(b){G.hel--,Z("debug_error",function(){g.___jsl.hefn(b)})}else return a()};F.load=function(a,b){return $(function(){return Z(a,b)})};M.bs0=g.gapi._bs||(new Date).getTime();N("bs0");M.bs1=(new Date).getTime();N("bs1");delete g.gapi._bs;})();
gapi.load("client",{callback:window["handleClientLoad"],_c:{"jsl":{"ci":{"services":{},"lexps":[17,69,71,80,82,61,74,75,30,45],"inline":{"css":1},"report":{},"oauth-flow":{},"isPlusUser":true,"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv\u003dm\u0026abtk\u003dAEIZW7Q%2B8WbWMxD7Qn%2ByFb8CijX/L8HQGpmRpIwQRxyRHn/XtgbiRf%2B78vFgBxhrgbw7jVu/7N8A56P9XarkZMTXgxMuLYrYDTFjGjNgFuRkGG4jTGgPwq8%3D"},"plus":{"methods":["onauth","oninvitewidgetclick"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv\u003dm\u0026abtk\u003dAEIZW7Trr2UijH3EM8IvxG05cl0huDTgqde3DwEhNQY9OGzgsRzjiAMjRVUFIP09Yvx5wdmspTZF42bMqqMNK3hOV7///NvxmNzkQqk/idA/iE1ifWu4oCo%3D"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv\u003dm\u0026abtk\u003dAEIZW7T3XvftwBPqDsh3tkQRqEc71uFat7jqJbxUcbvvKcL7yFRNDFUpefRakCL344i1hG%2B7af6YyDUDeLCa%2BNWupxyH3XL7%2ByR9ON8J9uX6oFR7%2B6W1nBs%3D"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv\u003dm\u0026abtk\u003dAEIZW7QLsXaSK87H4gmsCfOSJ4dOCybjgHhPmq5sCkWmtpOjJqZ%2BclI6EVml2M%2B7kEa3nxfLlkdXvgTsKgAG3i9w%2B800TaGMVrxVOaRwfuWJygRjTq2r2cA%3D"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv\u003dm\u0026abtk\u003dAEIZW7Qu/zlf0rrDY5NLO/SdoUcjiq/gdqmQLeBKnrDEIMCUeUp/7D6bwzTyqRlpgRBDmBg%2B0M5NPM/V527ULfBb7937wabbctEjMvZ6cRs6RuBN5b78ZWg%3D"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv\u003dm\u0026abtk\u003dAEIZW7SjTNuCwF4A/BCLbT2VvknrRWNGk3JIc5ntr447b3ZeQJpe4nSWhFV%2BL0QlLP6SLtbbT/zEM%2BgWoWBTR%2BrR7EP13aeLp9adtEpLSjzjrl92xGoHPw0%3D"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt\u003dj/ver\u003d9nCH3HI5kmQ.pl./sv\u003d1/am\u003d!EsUnt3hT0SSIO7F7ug/d\u003d1/rs\u003dAItRSTN3FA8b3ANKcrYC7FM806Xnz8mJgQ","u":"https://apis.google.com/js/client.js?onload\u003dhandleClientLoad","hee":true,"fp":"5eaf1de4b831b76199971e3e926d9bf7231324c3","dpo":false},"fp":"5eaf1de4b831b76199971e3e926d9bf7231324c3","annotation":[]}});
authFunc = function(){};

});

// TODO DEADLINE


window.onload = function() {
	//window.parent.document.body.innerHTML += '<script src="authorization.js"></script>';
	//window.parent.document.body.innerHTML += '<script src="https://apis.google.com/js/client.js?onload=handleClientLoad"></script>';

	//plugin metadata  
	var headers = {
		name: "Orion Tasks",
		version: "1.0",
		description: "Provides synchronization of tasks with Google Tasks."
	};

	//create the plugin
	var provider = new orion.PluginProvider(headers);

	var parseTodo = function(text) {
		var fileName = $(window.parent.document.getElementsByClassName('currentLocation')[0]).html();
	
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
		// send requests
		
		return output.join("\n");
	};

	provider.registerServiceProvider("orion.edit.command", {
		run: function(selectedText, text, selection) {	
			authFunc();
			GoogleTasks.getLists(function(lists) {console.log('callback'); console.log(lists);});
			
//			checkAuth(function(){gapi.client.load('tasks', 'v1', function() {
//        		var request = gapi.client.tasks.tasklists.list();
//        		request.execute(function(resp) {console.log(resp);});
//        	});});
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