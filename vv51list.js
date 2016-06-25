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
	var list = new Array();
	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}
	 
	
	$.ajax({
		url: "http://www.51vv.com/music/sodmvifrem.htm"+window.location.search,
		success: function(param) {
			console.log(param);
			for(var i = 0; i < param.rows.length;i++) {
				var row = param.rows[i];
				list[i] = {
					title : row.name,
					thumb : host+"/"+row.filePic,
					time : row.mvTotal,
					link :"http://www.51vv.com/play/sod_"+row.songID+"_"+row.categoryID+".htm",
					rating:row.singerName,
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


loadScript("http://libs.useso.com/js/jquery/2.0.0/jquery.min.js", function () {
 
            
	getList();
});
