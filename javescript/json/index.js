// js原生ajax: AJAX 是与服务器交换数据并更新部分网页的艺术,在不重新加载整个页面的情况下。
var xmlhttp;
function loadXMLDoc(url) {
    xmlhttp = null;
    if (window.XMLHttpRequest) { // code for all new browsers
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5 and IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    } else {
        alert("Your browser does not support XMLHTTP.");
    }
}

function state_Change() {
    if (xmlhttp.readyState == 4) { // 4 = "loaded"
        if (xmlhttp.status == 200) { // 200 = OK
            // ...our code here...
			console.log('success');
        } else {
            alert("Problem retrieving XML data");
        }
    }
}
