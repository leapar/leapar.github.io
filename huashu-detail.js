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
	//var video = $("#video");

	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}
	
//	var url = video.attr("src");
	
//	var youku = is_youku(url);
//	if(youku) {
//		url = "http://v.youku.com/v_show/id_" + youku + ".html";
//	}


 //http://apiontime.wasu.cn/Auth/getVideoUrl?id=7802353
 //&key=f2e31a413d6263cfe7a341675bafff53
 //&url=aHR0cDovL3dhcHZvZC1hbC53YXN1LmNuL3Bjc2FuMTIvbWFtcy92b2QvMjAxNjA4LzExLzE2LzIwMTYwODExMTYxNzI3NzM2MWUzMDMxM2JfZGE0OTYxMDQuZmx2
 //&type=jsonp
 
if(videoInfo.url.startWith('http')) {
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
return;
}
 
 	var ts =+ (new Date);
	var url = 'http://apiontime.wasu.cn/Auth/getVideoUrl?id=' + videoInfo.vid +'&key='+videoInfo.key+'&url='+videoInfo.url+ '&_=' + ts;
	
	
	
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

loadScript("http://libs.useso.com/js/jquery/2.0.0/jquery.min.js", function () {
	getInfo();
});