//http://www.tudou.com/programs/view/html5embed.action?code=r4S7Hl4mvLs&amp;resourceId=0_06_05_99
//http://www.tudou.com/programs/view/r4S7Hl4mvLs/?resourceId=0_06_02_99

function parse51vvCode(url,callback) {
	var ul = $("video");
	var src = ul[0];
	src = $(src).attr("src");
	
	callback({
		isok: true,
		url: src,
		type:'detail',
	});
	
}



function getVideos(url, callback) {
	parse51vvCode(url, callback)
}

console.log("onloadonloadonload");

getVideos(document.URL, function(e) {
	//$("#info").text(typeof(WebViewBridgeAndroid));    
	console.log(e);
	if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
		WebViewBridgeAndroid.send(JSON.stringify(e));
		// $("#info").text(JSON.stringify(e));  
	}
});


