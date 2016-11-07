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

function is_youku(url) {
	var urlReg = /(?:id_)(.*)(?:.html)/,
		urlReg2 = /(?:v_playlist\/f)(.*)(?:o1p\d.html)/,
		urlReg3 = /(?:youku.com\/embed\/)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';

	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else if (urlReg2.test(url)) {
		match = urlReg2.exec(url);
	} else if (urlReg3.test(url)) {
		match = urlReg3.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
		return match[1];
	} else {
		return false;
	}
}

function getInfo(){
	var video = $("#video");

	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}
	
	var url = video.attr("src");
	
	var youku = is_youku(url);
	if(youku) {
		url = "http://v.youku.com/v_show/id_" + youku + ".html";
	}
 
	console.log(url);
	console.log(JSON.stringify({url:url}));
		
	if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
		WebViewBridgeAndroid.send(JSON.stringify({url:url,type:'detail'}));
		// $("#info").text(JSON.stringify(e));  
	}
	
}

loadScript("http://leapar.github.io/jquery.min.js", function () {
	getInfo();
});