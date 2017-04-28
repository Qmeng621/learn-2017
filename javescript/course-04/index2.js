		// var key = "out-key";
		// function fn(){
		// 	 key = "inner-key";
		// 	console.log(key);
		// }
		// fn();//输出的是fn函数的结果
		// console.log(key);


		// //案例01
		// function outer(){
		// 	var a = 2;
		// 	function inner(){
		// 		console.log(a);
		// 	}
		// 	return inner;//rerurn函数inner()的函数结果
		// }
		// outer();//outer()函数的结果就是函数return inner()的结果
		// console.log(outer());
		// //如果把14行中的return inner()的小括号去掉,outer()函数输出的结果是inner()函数

		// //案例02
		// function outer(){
		// 	var num = 99;
		// 	function inner(){
		// 		num ++;
		// 	}
		// 	return inner;
		// }
		// var res1 = outer();
		// //console.log(res1);
		// console.log(res1());//

		// //案例 03:变量的值始终保持在内存中。
		// function outer(){
		// 	var num = 0;
		// 	function inner(){
		// 		num ++;
		// 		return num;
		// 	}
		// 	return inner
		// }
		// var res1 = outer();
		// console.log(res1());
		// console.log(res1());
		// console.log(res1());
		// console.log(res1());
		// console.log(res1());
		// console.log(res1());


		//案例 04://写一个函数奇数次运行时输出1，偶数次运行输出2(不允许全局变量);
		function outer(){
			var num = 0;
			function inner(){
				num ++;
				if(num%2 === 0){
					return 2;
				}else{
					return 1;
				}
			}
			return inner;//rerurn出去的是inner这个函数
		}
		var res1 = outer();//rerurn出去的是inner这个函数,运行outer()的结果是inner这个函数,inner函数赋予变量 res1
		console.log(res1());//res1是一个函数,res1不调用没有意义,调用res1()的结果即:运行inner这个函数的结果
		console.log(res1());
		console.log(res1());
		console.log(res1());
		console.log(res1());
		console.log(res1());
		console.log(res1());
		console.log(res1());
