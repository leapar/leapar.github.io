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
		url: "http://m.miaopai.com/v2_index/getIndexData"+window.location.search,
		success: function(param) {
			//	console.log(param);
			var param = $(JSON.parse(param).msg);
			console.log(param);
		//	var card = param.
			for(var i = 0; i < param.length;i++) {
				var link = $(param[i]).find('div.card_img').attr('onclick');
				link = link.substring(33,link.length-1);
				link = "http://m.miaopai.com"+link;
				list[i] = {
					title : $(param[i]).find('div.h_title').text(),
					thumb : $(param[i]).find('div.card_img').attr('data-url'),
					time : $(param[i]).find('div.title').text(),
					link : link,
					rating:$(param[0]).find('div.l_wrapping b').text(),
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
