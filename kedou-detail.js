//http://www.tudou.com/programs/view/html5embed.action?code=r4S7Hl4mvLs&amp;resourceId=0_06_05_99
//http://www.tudou.com/programs/view/r4S7Hl4mvLs/?resourceId=0_06_02_99

function parse51vvCode(callback) {
	callback({
		isok: true,
		url: flashvars.video_url,
		type:'detail',
	});
}



function getVideos(callback) {
	parse51vvCode(callback)
}

console.log("onloadonloadonload");

getVideos(function(e) {
	//$("#info").text(typeof(WebViewBridgeAndroid));    
	console.log(e);
	if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
		WebViewBridgeAndroid.send(JSON.stringify(e));
		// $("#info").text(JSON.stringify(e));  
	}
});


