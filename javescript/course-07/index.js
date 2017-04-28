// 以下是字符串对象
var mystr = "I like JavaScript!";
var myStr = "I-like-JavaScript!";
var myStr2 = "www.baidu.com";

var key = mystr.indexOf('i');
var key2 = mystr.indexOf('i', 5);
console.log('i第一次出现的下标是:' + key);
console.log('i从下标5开始算,第一次出现的下标位置是:'+ key2);

var char = mystr.charAt(4);
console.log('下标是4的字母是' + char);

var split = myStr.split('-', 2);//split()一点为拆分符,拆分字符串,拆分两段
var split2 = myStr2.split('.', 2);//split()将字符串分割并返回数组
console.log(split);
console.log('.点作为分隔符分割两段:' + split2);

var substring = myStr2.substring(1, 4);//截取下标1到3,不包括4的字符串,sub是下标的意思
console.log('substring截取的是:' + substring);//如果substring(4, 1) start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数

var substr = myStr2.substr(1,4);//指定下标位置指定的长度,这里的 4是截取的长度
console.log('substr是:' + substr);

var slice = myStr2.slice(1, 4);//提取下边是1到4的字符串,不包括下标 4
console.log('slice截取的是:' + slice);

console.log('在substring没有负数的情况下substring()等价于slice,都是下标截取');


// 以下是数组对象
var myArray = [1, 2, 3, 4];
var myArray2 = ['a', 'b', 'c', 'd'];
var myArray3 = myArray2.slice(0, 2);//返回新数组
console.log(myArray);
console.log(myArray2);
console.log(myArray3);

var myArray4 = myArray2.concat(myArray);//返回新数组
console.log(myArray4);

var myarr5 = [11, 22, 33, 44]
myarr5.splice(0,2);//从 0 开始 删除 2个
console.log('myarr5的结果是' + myarr5);

var myarr6 = [11, 22, 33, 44]
myarr6.splice(0, 2, 'a');//从 0 开始 删除 2个,把 a 加进去
console.log(myarr6);

var myarr7 = [11, 22, 33, 44]
myarr7.splice(0, 2, 'a','b', 520);//从 0 开始 删除 2个,把 a , b ,520 加进去
console.log(myarr7);

var myarr8 = [11, 22, 33, 44]
myarr8.splice(0, 1, 'a', 'b');//从 0 开始 删除 1个,把 a , b ,520 加进去
console.log(myarr8);

var my = [1,2,3,4,5,6];
console.log('颠倒的结果是:' + my.reverse());//颠倒数组顺序
console.log(my);//改变原数组
console.log(my.join('.'));//把数组元素链接成字符串;指定要使用的分隔符，如省略，则使用逗号作为分隔符

var my2 = ['www', 'qmengweb', 'com', 'cn'];
console.log(my2.slice(0,2));
console.log(my2);


var my3 = [1,22,3,4,15,6];
var my4 = ['a','c','b','d'];
function max(a, b){
	return a - b;
}
function min(a, b){
	return b - a;
}
console.log(my3);
console.log(my4);
console.log('my3升序结果是:' + my3.sort(max));
console.log('my4升序结果是:' + my4.sort(max));
console.log('my3降序结果是:' + my3.sort(min));
//console.log('my4降序结果是:' + my4.sort(min));


var my5 = ['a','c','b','d'];
console.log('pop删除的是' + my5.pop());//删除一个数组中的最后一个元素,返回被删除的这个元素

var my6 = ['a','c','b','d'];
console.log('push添加后的长度是:' + my6.push('e','f'));//返回改变后数组的长度

var my7 = ['a','c'];
console.log('unshift添加后的长度是:' + my7.unshift('ee','ff'));//在数组的开头添加一个或者多个元素,返回改变后数组的长度

var my8 = ['a', 'b' ,'c'];
console.log('shift删除最前面的是:' + my8.shift());//在数组的开头添加一个或者多个元素,返回改变后数组的长度

var my9 = ['a','b' ,'c'];
console.log('pop删除最后是:' + my9.pop('ee','ff'));//在数组的开头添加一个或者多个元素,返回改变后数组的长度



console.log(Math.PI);//π的值
console.log(Math.abs(-15));//绝对值
console.log(Math.ceil(0.9));//向上取整
console.log(Math.floor(0.6));//向下取整
console.log(Math.round(0.4));//四舍五入
console.log((Math.random()) * 10);//输出一个 0 至 10 之间的随机整数
//random() 方法可返回介于 0 ~ 1 ( >= 0,但 <1 )之间的一个随机数。
console.log(Math.min(0.8, 6.6, 5, 4.5, -5.1, -5.9));//最大值
console.log(Math.max(0.8, 6.6, 5, 4.5, -5.1, -5.9));//最小值
