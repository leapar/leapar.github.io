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

function is_yinyuetai(url) {
	var urlReg = /(?:yinyuetai.com\/video\/h5\/)(.*)/,
		urlReg2 = /(?:yinyuetai.com\/video\/)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';

	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else if (urlReg2.test(url)) {
		match = urlReg2.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
		return match[1];
	} else {
		return false;
	}
}

function getList(){
	var list = new Array();
	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}
	
	//http://v.yinyuetai.com/video/h5/2508251
	var vid = is_yinyuetai(document.URL);
	
	var ts =+ (new Date);
	var url = 'http://ext.yinyuetai.com/main/get-h-mv-info?json=true&videoId=' + vid + '&_=' + ts;
	
	
	
	$.ajax({
		url: url,
		dataType: 'JSONP',
		success: function(param) {
			console.log(param);
		 
				var row = param.videoInfo.coreVideoInfo.videoUrlModels[0];
			
			var info ={
				isok: true,
				url: row.videoUrl,
				type:'detail',
			};
				console.log(info);
			if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
				WebViewBridgeAndroid.send(JSON.stringify(info));
				// $("#info").text(JSON.stringify(e));  
			} else {
				console.log("no WebViewBridgeAndroid");
			}
			 
		},
		error: function(param) {
			console.log(param);
				
		
			if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
				WebViewBridgeAndroid.send(JSON.stringify({type:'detail',isok:false,}));
				// $("#info").text(JSON.stringify(e));  
			} else {
				console.log("no WebViewBridgeAndroid");
			}
		}
	});
  

	
}


loadScript("http://leapar.github.io/jquery.min.js", function () {
 
            
	getList();
});
