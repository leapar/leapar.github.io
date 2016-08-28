//http://www.tudou.com/programs/view/html5embed.action?code=r4S7Hl4mvLs&amp;resourceId=0_06_05_99
//http://www.tudou.com/programs/view/r4S7Hl4mvLs/?resourceId=0_06_02_99

function getVideoId(url) {
	var urlReg = /(?:douyu.com\/)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';
	//	urlReg3 = /(?:youku.com\/embed\/)(.*)/,
	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
            return match[1];
	} else {
		return false;
	}
}

function parseDouyuCode(url, callback) {
	var videoId = getVideoId(url);
	if (!videoId) {
		callback({
			isok: false,
			type:'detail',	
			msg: "-1"
		});
		return;
	}
	console.log("videoId:" + videoId );
	
	//http://www.tudou.com/outplay/goto/getItemSegs.action?iid=%s
	$.ajax({
		url: 'http://m.douyu.com/html5/live?roomId=' + videoId ,
	//	dataType: 'JSONP',
		//here
		success: function(param) {
			console.log(param); 
			
			var data = JSON.parse(param);
			var size = 0;
			console.log(k); 
			//getFlvPath(k,callback);
			
			callback({
				isok: true,
				url: data.data.hls_url,
				type:'detail',
			});	
		},
		error: function(param) {
			callback({
				isok: false,
				type:'detail',	
				msg: param.status+"videoId:" + videoId 
			});
		}
	})
				
}



function getVideos(url, callback) {
	parseDouyuCode(url, callback)
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


