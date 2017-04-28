// console.log(window);//等价于Window.console.log(window);
// console.log(window.location);//链接地址
// window.location.href='http://www.baidu.com'

console.log(window.navigator)
console.log(window.navigator.userAgent);
// console.log(window.navigator.userAgent.toLocaleLowerCase());//把用户代理转换为小写

// 监测浏览器信息
var u_Agent = navigator.userAgent.toLocaleLowerCase();
var b_Name = "不是主流浏览器"
if(u_Agent.indexOf('chrome') != -1){
	console.log('你用的是谷歌浏览器');
} else if(u_Agent.indexOf('firefox') != -1){
	console.log('你用的是火狐浏览器');
}else if(u_Agent.indexOf("Mise") != 1 && u_Agent.indexOf("Trident") != 1){
	console.log('你用的是IE浏览器');//IE变态居然含有chrome
}else{
	console.log(b_Name);
}


// ua.indexOf('chrome')不等于-1,说明出现了chrome,所以是chrome浏览器
// function windowOpen(){
// 	window.open("www.baidu.com")
// }
// var inp = document.getElmentById("inp");
// inp.onclick = windowOpen;
