function loadScript(url, callback) {
 	var script = document.createElement("script");
 	script.type ="text/javascript";
 	// IE
 	if (script.readyState) {
 		script.onreadystatechange = function () {
		 	if (script.readyState =="loaded"|| script.readyState =="complete") {
		 		script.onreadystatechange = null;
				callback();
			}
		};
 	} else { // others
		script.onload = function () {
			callback();
		};
	}
	script.src = url;
	document.body.appendChild(script);
}


function getInfo(){
	var video = $("#video");

	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}
	
	var url = video.attr("src");
 
	console.log(url);
	console.log(JSON.stringify({url:url}));
		
	if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
		WebViewBridgeAndroid.send(JSON.stringify({url:url,type:'detail'}));
		// $("#info").text(JSON.stringify(e));  
	}
	
}

loadScript("http://libs.useso.com/js/jquery/2.0.0/jquery.min.js", function () {
	getInfo();
});