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
	var ul = $("div.item");
	var list = new Array();
	var host = window.location.protocol +"//"+ window.location.host;
	if(window.location.port != '') {
		host += ":"+window.location.port;
	}

	for(var i = 0;i < ul.length;i++) {
		var li = ul[i];
		var link = $(li).find('a')[0];
		link = $(link).attr("href");

		if(link.indexOf("/") == 0) {
			link = host + link;
		}
		
		var img = $(li).find('.p_img')[0];
		var thumb = $(img).css('background-image');
		thumb = thumb.substring(5,thumb.length-2);
		
		
		if(thumb.indexOf("/") == 0) {
			thumb = host + thumb;
		}	
			
		var title = $(li).find('a:eq(0)')[0];
		title = $(title).attr('title');
	
		var time = $(li).find('.meta_tr')[0];
		time = time.innerText;
		
	//	var rating = $(li).find('p:eq(0)')[0];
	//	rating = rating.innerText;
		var rating = "";
		
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
