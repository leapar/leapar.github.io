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

	for(var i = 0;i < ul.length;i++) {
		var li = ul[i];
		var romid = $(li).attr("data-rid");
		
		link = "http://m.douyu.com/"+romid;

		
		var img = $(li).find('img')[0];
		var thumb = $(img).attr("data-original");

		var title = $(li).find('h3.ellipsis')[0];
		title = title.innerText;
	
		var time = $(li).find('span.dy-name')[0];
		time = time.innerText;
		
		var rating = $(li).find('span.dy-num')[0];
		rating = rating.innerText;
		
		list[i] = {
			title : title,
			thumb : thumb,
			time : time,
			link :link,
			rating:rating,
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
  

	
}


loadScript("http://libs.useso.com/js/jquery/2.0.0/jquery.min.js", function () {
 
            
	getList();
});
