

function getInfo(){
	var video = $("#video");

	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}
	
	var url = video.attr("src");
 
	console.log(url);
	
	if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
		WebViewBridgeAndroid.send(JSON.stringify({url:url}));
		// $("#info").text(JSON.stringify(e));  
	}
	
}

getInfo();