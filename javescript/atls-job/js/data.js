var now = new Date();
var weekday=["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
console.log('今天是:' + year + '年' + month + '月' + date + '日' + hours + '时' + minutes + '分' + seconds + '秒');

var myDay = now.getDay();
console.log(myDay);
console.log('今天是:' + weekday[myDay]);
console.log('今天是:' + year + '年' + month + '月' + date + '日' + '' + weekday[myDay]);

var myData = year + '年' + month + '月' + date + '日' + ' ' + weekday[myDay] + ' '  + hours + '时' + minutes + '分';

var databox = document.getElementById("databox");
databox.innerHTML = myData;
