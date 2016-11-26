//http://www.tudou.com/programs/view/html5embed.action?code=r4S7Hl4mvLs&amp;resourceId=0_06_05_99
//http://www.tudou.com/programs/view/r4S7Hl4mvLs/?resourceId=0_06_02_99
function clearCookie(){
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i =  keys.length; i--;)
            document.cookie=keys[i]+'=0;path=/; domain=.kedou.share.video.zipaicao.com;expires=' + new Date( 0).toUTCString()
            
            //path=/; domain=.kedou.share.video.zipaicao.com
    }    
}
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
clearCookie();

console.log("onloadonloadonload");
document.cookie='video_log=0;path=/; domain=.kedou.share.video.zipaicao.com';
	
getVideos(function(e) {
	//$("#info").text(typeof(WebViewBridgeAndroid));    
	console.log(e);
	if (typeof(WebViewBridgeAndroid) != "undefined" && WebViewBridgeAndroid) {
		WebViewBridgeAndroid.send(JSON.stringify(e));
		// $("#info").text(JSON.stringify(e));  
	}
});


