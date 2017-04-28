// 01:写入htmldocument.write
// var mychar = "JavaScript";
// document.write(mychar);
// var mynum = "12";
// document.write(mynum);
// var mynum = "1&nbsp;&nbsp;&nbsp;2";
// document.write(mynum);

// 02:警告框 alert
// 使用语法： alert(字符串或变量)
// var mychar = "JavaScript";
// alert(mychar);

// 03:获取HTML元素
// 1. 通过id获取元素
// document只html这个文档
// var pid = document.getElementById("pid");
// document.write("内容：" + pid.innerHTML);

	var usename = document.getElementById("usename").value
	console.log(usename);
	var p = document.getElementsByTagName("p");
	for(var i = 0; i < p.length; i++){
	    console.log(p[i].innerHTML);
	}

	var span = document.getElementsByTagName("span");
	for(var i = 0; i < span.length; i++){
		console.log(span[i].innerHTML);
	}

// 通过名称获取元素:使用语法：document.getElementsByName(“name_value”)
	var inp = document.getElementsByName("iname");
       for(var i = 0; i < inp.length; i++){
           console.log(inp[i].value);
       }



 	var btn = document.getElementById("btn");
    btn.onclick = attr;
    function attr() {
        var pid = document.getElementById("pId");
        alert(pId.getAttribute("id"));
        alert(pId.getAttribute("title"));
        pId.setAttribute("title", "hello");
        alert(pId.getAttribute("title"));
    }

	var addr = document.getElementById("selectAddress");
	addr.onchange = function (e){
		console.log(e);
	}
