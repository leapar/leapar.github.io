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

function getList(){
	var ul = $("li");
	var list = new Array();
	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}

	$.ajax({
		url: "http://www.huomao.com/mobile/mobChannel_ajax"+window.location.search,
		success: function(param) {
			//	console.log(param);
			var param = param.data.channelList;
			console.log(param);
		//	var card = param.
			for(var i = 0; i < param.length;i++) {
				var link = "http://www.huomao.com/mobile/mob_live/" + param[i].id;
				list[i] = {
					title : param[i].channel,
					thumb : param[i].image,
					time : param[i].nickname,
					link : link,
					rating:param[i].views,
				}
			}
			
			console.log(list);
			console.log(JSON.stringify({type:'list',data:list}));
			
			if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
				WebViewBridgeAndroid.send(JSON.stringify({type:'list',data:list}));
				// $("#info").text(JSON.stringify(e));  
			} else {
				console.log("no WebViewBridgeAndroid");
			}
			
		},
		error: function(param) {
			console.log(param);
			if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
				WebViewBridgeAndroid.send(JSON.stringify({type:'list',data:list}));
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
