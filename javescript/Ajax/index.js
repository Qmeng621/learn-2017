var XMLHttp = null;
if(window.XMLHttpRequest()){//如果window下有XMLHttpRequest
	//XMLHttpRequest 对象用于和服务器交换数据。
	XMLHttp = new XMLHttpRequest();//创建ajax请求的下对象(向谁请求呢?向服务器请求,请求什么,请求数据)
} else if (window.ActiveXObject) {//如果有ActiveXObject说明是IE6以下的浏览器
	XMLHttp = new ActiveXObject("Microsoft.XMLHttp");
} else{
	alert('你的浏览器不支持Ajax技术')
}if(XMLHttp != null){
	XMLHttp.onreadystatechange = stateChange;
	XMLHttp.open('GET','xxx.php',true);//true,是否异步的意思,true是异步的意思
	XMLHttp.send(null);
}
function stateChange(){
	if(XMLHttp.readyState == 4){
		//xmlhttp.readyState==4  这个指的是xmlhttp的交互状态.为4就是交互完成.
		//XMLHTTP 的 readyState 值含义：
		// 0－未初始化，即尚未调用 open。
		// 1－初始化，即尚未调用 send。
		// 2－发送数据，即已经调用 send。
		// 3－数据传送中。
		// 4－完成。
		if(XMLHttp.status == 200){
			//xmlhttp.status==200  这个是你xmlhttp与后台交互时返回的一个状态码.200指的是正常交互完成.
			//关于HTTP状态码,你可以查一下百度.404指的是文件未找到.500是出现内部服务器错误.一般来说这三个用得比较多.
			console.log('succeed');//跨域名(即跨域)怎么办呢,jsonp解决
		}
	}
}
//以上已js最原始的ajax技术
