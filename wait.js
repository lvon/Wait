function getWaitHtml(css) {
	var el = $('<div class="tipCover" align="center"> <div class="waitCenter"> <span class="circles-loader">Loading…</span> <div style="color:white;margin-top: 50px;" id="waitText"></div></div></div>');
	el.find("#waitText").text("loading...");
	if (css != null && typeof (css) != "undefined") {
		el.find(".circles-loader").attr("class", css);
	}
	return el[0];
}

/**
 * 设置等待样式
 * 
 * @param css
 */
function setWaitCss(css) {
	$(".circles-loader").attr("class", css);
}

/**
 * 调用此方法显示等待
 */
function showWait(fch) {
	if($(".tipCover").size()==0){
		waitInit();
	}
	
	$(".tipCover").css("display", "table");
	if (typeof (fch) != "undefined") {
		fch();
	}
}

/**
 * 调用此方法隐藏等待
 */
function hideWait(fch) {
	$(".tipCover").hide();
	if (typeof (fch) != "undefined") {
		fch();
	}
}

function setWaitOpa(opa) {
	$(".tipCover").css("opacity", opa);
}

function loadExtentFile(filePath, fileType) {
	if (fileType == "js") {
		var oJs = document.createElement('script');
		oJs.setAttribute("type", "text/javascript");
		oJs.setAttribute("src", filePath);// 文件的地址 ,可为绝对及相对路径
		document.getElementsByTagName("head")[0].appendChild(oJs);// 绑定
	} else if (fileType == "css") {
		var oCss = document.createElement("link");
		oCss.setAttribute("rel", "stylesheet");
		oCss.setAttribute("type", "text/css");
		oCss.setAttribute("href", filePath);
		document.getElementsByTagName("head")[0].appendChild(oCss);// 绑定
	}
}

function setWaitText(txt) {
	$("#waitText").text(txt);
}
/**
 * 务必在dom加载完之后调用此方法，css为等待的样式
 * 
 * @param css
 */
function waitInit(css) {
	loadExtentFile("wait.css", "css");
	var el = getWaitHtml(css);
	document.body.appendChild(el);
}