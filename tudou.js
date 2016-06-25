//http://www.tudou.com/programs/view/html5embed.action?code=r4S7Hl4mvLs&amp;resourceId=0_06_05_99
//http://www.tudou.com/programs/view/r4S7Hl4mvLs/?resourceId=0_06_02_99

function getVideoId(url) {
	if(config != undefined && config != null) {
		return config.item.iid;
	}
	
	if(pageConfig != undefined && pageConfig != null) {
		return pageConfig.iid;
	}
 	//config.item.iid
	//pageConfig
}

function getFlvPath(videoId, callback) {
	$.ajax({
		url: "http://ct.v2.tudou.com/f?id="+videoId,
		dataType: 'JSONP',
		//here
		success: function(param) {
			if (param == -1) {
				callback({
					isok: false,
					type:'detail',
				});
				return;
			}
			callback({
				isok: true,
				url: param[0]['server'],
				type:'detail',
			});
		},
		error: function(param) {
			callback({
				isok: false,
				type:'detail',	
				msg: param.status+videoId
			});
		}
	})
}

function parseTudouCode(url, callback) {
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
		url: 'http://www.tudou.com/outplay/goto/getItemSegs.action?iid=' + videoId ,
	//	dataType: 'JSONP',
		//here
		success: function(param) {
			console.log(param); 
			
			var data = JSON.parse(param);
			var size = 0;
			var info = null;
			for(var i in data) {
				if(data[i][0].size > size) {
					info = data[i][0];
				}
			}
			var k = info.k;
			console.log(k); 
			//getFlvPath(k,callback);
			
			callback({
				isok: true,
				url: "http://ct.v2.tudou.com/f?id="+k,
				json: [
		            {
		                name : 'url',
		                tag: 'f',
		                func: 'text',
		            },
		        ],
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
	parseTudouCode(url, callback)
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


