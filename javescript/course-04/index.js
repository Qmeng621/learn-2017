// //求最大值
// function myMax(x, y){
// 	if (x > y) {
// 		console.log(x)
// 	} else if(x < y){
// 		console.log(y);
// 	} else{
// 		console.log(x + '等于' + y);
// 	}
// }
// myMax(8, 8);
// myMax(2, 8);
//


// 默认值
// function my_Max(a, b){
// 	var res = '';
// 	var a = a;
// 	var b = b || 5;//如果不给b赋值的话,b的默认值是 5 ;
// 	res = a * b;
// 	return res;
// }
// var my_res = my_Max(3);
// console.log(my_res);

// 如果有新的赋值,就用新的赋值
// function my_cheng(a, b){
// 	var res = '';
// 	var a = a;
// 	var b = b || 5;//如果不给b赋值的话,b的默认值是 5 ;
// 	res = a * b;
// 	return res;
// }
// // var my_res = my_Max(5,1);
// console.log(my_cheng(3,2));
//

// // 01:未定义
// function fn(){
// 	var key = 'inner-key';
// 	console.log(key);
// }
// fn();//输出的是函数的结果
// // console.log(key);//会提示key未定义(key is not defined).因为key是在fn函数内部声明的,在外边是调用不到内部的变量 key的.这就是作用域(变量作用的范围)的问题
// //在函数外部自然读取不到函数内的局部变量


// 02:函数被调用后,key的值被覆盖
// var key = 'out-key';
// function fn(){
// 	key = 'inner-key'; //js有预解析,预读的功能,从上往下读,读到这里的key,key没有var ,被认为在外面定义了,同时,key的值被inner-key覆盖了
// 	console.log(key);
// }
// fn();//fn()输出的是函数的结果,当fn函数被调用的时候,key的值就被里面的值给覆盖了;
//  console.log(key);//函数被调用后key的也被覆盖了



// // 03:fn函数未被调用,所以 key 输出的是外边的 key值,即 out-key
// var key = 'out-key';
// function fn(){
// 	key = 'inner-key';
// 	console.log(key);
// }
//  console.log(key);//fn函数未被调用,所以输出的是外边的 key值,即 out-key



 // 04:如何在外部读取函数内部的局部变量呢 ?
 // 那就需要在函数内部再定义一个函数,并且被调用,形成闭包
 // 闭包定义:能够读取其他函数内部变量的函数就叫闭包.闭包就是一个函数.
 // 闭包是一个函数,他记住周围发生了什么,表现为:一个函数体内 又定义了一个函数.
 // 子函数可以读取父函数的变量值


// 闭包
// function outer(){
// 	var a = 2;
// 	function inner(){
// 		console.log(a);
// 	}
// 	return inner;//return出去的是inner函数本身
// 	// return inner();//return出去的是函数的结果
// }
// console.log(outer);
// console.log(outer());


// function outer(){
// 	var a = 2;
// 	function inner(){
// 		console.log(a);
// 	}
// 	return inner;//return出去的是inner函数本身
// 	// return inner();//return出去的是函数的结果
// }
// // console.log(outer);
// console.log(outer());

// function outer(){
// 	var a = 2;
// 	function inner(){
// 		console.log(a);
// 	}
// 	return inner();//return出去的是inner函数的结果
// }
// outer();//函数的结果

	function outer(){
	var num = 99;
		function inner(){
			 num++;
			 return num;//变成100
			 //return num++;
		}
	return inner;
	}
	var res1 = outer();
	console.log(res1());
	console.log(res1());
	console.log(res1());
	console.log(res1());
