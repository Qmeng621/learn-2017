var oDiv = document.getElementById("box");
oDiv.onmousedown = function (ev) {
	var oEvent = ev;
	var disX = oEvent.clientX - oDiv.offsetLeft;
	var disY = oEvent.clientY - oDiv.offsetTop;
	document.onmousemove = function (ev) {
		oEvent = ev;
		oDiv.style.left = oEvent.clientX - disX + "px";
		oDiv.style.top = oEvent.clientY - disY + "px";
	}
	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	}
}
