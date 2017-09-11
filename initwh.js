
// 扩展API准备完成后要执行的操作
function plusReady() {
	//  var ws = plus.webview.currentWebview(); //pw回车可输出plus.webview
	height = plus.display.resolutionHeight;
	width = plus.display.resolutionWidth;
	document.getElementById("body").style.width = width + "px";
	document.getElementById("grid-container").style.width = width + "px";
	document.getElementById("grid-container").style.height = width + "px";
}
function getScreenH() {
	return height;
}
function getScreenW() {
	return width;
}
function initwh() {
	// 扩展API是否准备好，如果没有则监听“plusready"事件
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}
}