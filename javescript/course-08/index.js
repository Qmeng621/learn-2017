var pid = document.getElementById('pid');
var div = document.getElementsByTagName('div');//标签tag加s
var ptag = document.getElementsByClassName('ptag');//class加s
console.log(div);
console.log(ptag);

document.write(pid.nodeName + '<br>' + pid.nodeType + '<br>'+ pid.nodeValue);
console.log(pid);

var h2 = document.createElement('h2');//创建元素标签
var text = document.createTextNode('标签2')//创建文本节点
h2.appendChild(text);
console.log(h2);
