// 对象，带有属性和方法的数据类型，一般由若干个 “键值对”（key-value）构成
// 内置对象就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用的或是最基本而必要的功能。浏览器上面跑的JS的内置对象有Math, String，Array, Date, 还有刚才的location。

// 01:对象的定义:对象，带有属性和方法的数据类型，一般由若干个 “键值对”（key-value）构成,对象是一种无序的数据集合，由若干个 “键值对”（key-value）构成。数组是有序的
// var obj = {
//     content: "Hello Qmeng"
// };
//
//
// // 02:键名加不加引号都可以，前面的代码也可以写成这样：
// var obj = {
//     "content": "Hello Qmeng"
// };
//
//
// // 03:对象的书写语法，通常有3种：这三句是等价的。
// var obj = {};//第一种采用大括号的写法（即对象字面量的写法
// var obj = new Object();//采用构造函数的写法清晰表示了意图
// var obj = Object.create(null);//一般用在需要对象继承的场合
//
//
// // 04:对象的引用:对象的引用
// // 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量的属性，会影响到其他所有变量。
// var obj1 = {};
// var obj2 = obj1;
//
// obj1.a = 18;
// obj2.a;    // 18
// //obj1 和 obj2 指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。
// obj2.b = 20;
// obj1.b;    // 20

// 字符串、数字、布尔值、undefined 以及 null 都是原始类型（primitive value）而非对象。而 String, Number, Boolean, Object 都是语言内置的对象(built-in object)，可以通过各自的构造函数得到
// 比如在 JavaScript 中，字符串是一个原始类型，它本身没有属性，当你对一个字符串作属性运算的时候（如 “some string”.length）, JavaScript 引擎会将该字符串包装成一个对象，该对象是通过 String 构造函数得到的。
// 也就是说 “some string”.length 实际上是 (new String(“some string”)).length
// 把基本数据类型转换为对应的引用类型的操作称为装箱，比如：new String(“some string”)，将字符串 “somestring” 转换为一个 String 对象。


// 05:对象的属性与方法,对象的特征叫属性，在对象上执行来实现一些功能的动作(函数)叫方法
// var message = "Hello World!";
// var mlen = message.length;//长度包括空格
// console.log(mlen);
//
//
// //对象的方法
// var message = "Hello World!";
// var upmess = message.toUpperCase();//字符串转大写;toLowerCase,转小写
// console.log(upmess);




// String对象
// indexOf()方法:返回某个指定的字符串值在字符串中首次出现的位置
// 语法: stringObject.indexOf(substring, startpos);//startpos:startpos是可选填的整数参数，规定开始检索的位置，取值范围是 0 到 stringObject.length - 1。省略的话就从首字符开始检索
// 如果要检索的字符串值没有出现，则该方法返回 -1。
// var mystr = "I like JavaScript!";
// console.log('i首次出现的下标位置是:' + mystr.indexOf("I"));
// console.log('z首次出现的下标位置是:' + mystr.indexOf("z",2));
// console.log('k首次出现的下标位置是:' + mystr.indexOf("k",4));
// console.log('v首次出现的下标位置是:' + mystr.indexOf("v"));//包括空格
// console.log(mystr.indexOf("v", 8));
// console.log(mystr.indexOf("a", mystr.indexOf("a") + 1));
//
//
// // charAt()方法:可返回指定位置的字符。返回的字符是长度为 1 的字符串。
// var mystr = "I love JavaScript!";
// console.log(mystr.charAt(2)); //2是字符在字符串中的下标;结果是l
//
// // split():方法将字符串分割为字符串数组，并返回此数组
// // 语法:stringObject.split(separator, limit);
var mystr = "www.baidu.com";
console.log(mystr.split("."));//separator:是分隔符
console.log(mystr.split(".", 2));


// substring()方法用于提取字符串中介于两个指定下标之间的字符串。
// 语法:stringObject.substring(starPos, stopPos);//starPos:开始位置,stopPos:结束位置
// 返回的内容是从 start 开始(包含 start 位置的字符)到 stop - 1 处的所有字符，其长度为 stop 减 start。
// var mystr = "I like JavaScript!";
// console.log(mystr.substring(7));
// console.log(mystr.substring(2, 6));


// substr()方法从字符串中提取从指定位置开始的指定数目的字符串。
// 语法:stringObject.substr(startPos, length);
// 需要注意的是：如果参数 startPos 是负数，从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
// 如果 startPos 为负数且绝对值大于字符串长度，startPos 为 0。
// var mystr = "I like JavaScript!";
// console.log(mystr.substr(7));
// console.log(mystr.substr(2,4));
// console.log(mystr.substr(-4,2));// 如果 startPos 为负数且绝对值大于字符串长度，startPos 为 0。
//

// slice()选区部分字符串
// slice() 提取字符串的一部分，并返回这个新的字符串。
// str.slice(beginSlice[, endSlice])
// var mystr = "I like JavaScript!";
// console.log(mystr.slice(2,6));//slice() 提取的新字符串包括beginSlice但不包括 endSlice。



// 写一个函数，统计字符串中出现次数最多的字符和次数
// var str = "abbcccdddd";
// var o = {};
// for(var i = 0; i < str.length; i++){
// 	var char = str.charAt(i);
// 	if (o[char]){
// 		o[char]++;
// 	} else {
// 		o[char] = 1;
// 	}
// 	console.log(o);
// 	var max = 0;
// 	var maxChar = null;
// 	for (var key in o){
// 		if (max < o[key]){
// 			max = o[key];
// 			maxChar = key
// 		}
// 	}
// }
// console.log("出现次数最多的字符是:" + maxChar);
// console.log("出现的次数是:" + max);


	var str = 'aab';
	var obj = {};
	function myTotal(str){
		for (var i = 0; i < str.length; i++) {
			var key = str.charAt(i);
			if(obj[key]){
				obj[key]++;
			}else{
				obj[key] = 1;
			}
			console.log(obj);
		}

		var max = 0;
		var inner = null;
		for(key in obj){
			if(obj[key] > max){
				max = obj[key];
				inner = key;
			}
		}
		return {maxNum: max, maxStr: inner};
	}
	var res = myTotal(str);
	console.log('出现次数最多的是:' + res.maxStr + '出现了:' + res.maxNum);
