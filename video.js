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

function is_youku(url) {
	var urlReg = /(?:id_)(.*)(?:.html)/,
		urlReg2 = /(?:v_playlist\/f)(.*)(?:o1p\d.html)/,
		urlReg3 = /(?:youku.com\/embed\/)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';

	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else if (urlReg2.test(url)) {
		match = urlReg2.exec(url);
	} else if (urlReg3.test(url)) {
		match = urlReg3.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
		return match[1];
	} else {
		return false;
	}
}

function is_tudou(url) {
	var urlReg = /(?:code=)(.*)(?:&resourceId=)(.*)/,
		urlReg2 = /(?:view\/)(.*)(?:\/\?resourceId=)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';

	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else if (urlReg2.test(url)) {
		match = urlReg2.exec(url);
	}  else {
		return false;
	}

	if (match.length === 3) {
		return {code:match[1],resid:match[2]};
	} else {
		return false;
	}
}

//http://www.51vv.com/play/sod_90304415_1729.htm
function is_51vv(url) {
	var urlReg = /(?:sod_)(.*)(?:_)(.*)(?:.htm)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';

	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else {
		return false;
	}

	if (match.length === 3) {
		return {code:match[1],resid:match[2]};
	} else {
		return false;
	}
}

function is_huomao(url) {
	var urlReg = /(?:huomao.com\/)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';
	//	urlReg3 = /(?:youku.com\/embed\/)(.*)/,
	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
            return {resid:match[1]};
	} else {
		return false;
	}
}

function is_miaopai(url) {
      var urlReg = /(?:m.miaopai.com\/show\/)(.*)/,
		match = false;
	//prefix = 'http://m.miaopai.com/show/';
	//	urlReg3 = /(?:youku.com\/embed\/)(.*)/,
	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
            return {resid:match[1]};
	} else {
		return false;
	}
}

function is_yinyuetai(url) {
	var urlReg = /(?:yinyuetai.com\/video\/h5\/)(.*)/,
		urlReg2 = /(?:yinyuetai.com\/video\/)(.*)/,
		match = false;
	//prefix = 'http://v.youku.com/player/getPlayList/VideoIDS/';

	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else if (urlReg2.test(url)) {
		match = urlReg2.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
		return match[1];
	} else {
		return false;
	}
}

function is_huashu(url) {
	//wasu.cn
	 var urlReg = /(?:wasu.cn\/wap\/)(.*)/,
		match = false;
	//prefix = 'http://m.miaopai.com/show/';
	//	urlReg3 = /(?:youku.com\/embed\/)(.*)/,
	if (urlReg.test(url)) {
		match = urlReg.exec(url);
	} else {
		return false;
	}

	if (match.length === 2) {
            return {resid:match[1]};
	} else {
		return false;
	}
}

if(is_youku(document.URL)) {
	loadScript("http://leapar.github.io/youku.js", function () {});
} else if(is_tudou(document.URL)) {
	loadScript("http://leapar.github.io/tudou.js", function () {});
} else if(is_51vv(document.URL)) {
	loadScript("http://leapar.github.io/vv51.js", function () {});
} else if(is_yinyuetai(document.URL)) {
	loadScript("http://leapar.github.io/yinyuetai.js", function () {});
} else if(is_huomao(document.URL)) {
	loadScript("http://leapar.github.io/huomao.js", function () {});
} else if(is_miaopai(document.URL)) {
	loadScript("http://leapar.github.io/miaopai.js", function () {});	
} else if(is_huashu(document.URL)) {
	loadScript("http://leapar.github.io/huashu-detail.js", function () {});	
		
	
} else {
	/*callback({
		isok: false,
		type:'detail',	
		msg: "-99999"
	});*/
}
