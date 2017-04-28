// 练习:写一个流程判断，变量 num 与输出值的关系如下：
// 1、如果 num 能同时被 3 和 5 整除，输出字符串 fizzbuzz--"这个数字是15的倍数"
// 2、如果 num 能被 3 整除，输出字符串 fizz--"这个数字是3的倍数"
// 3、如果 num 能被 5 整除，输出字符串 buzz--"这个数字只是5的倍数"
// 4、如果变量为空或者不是 Number 类型，输出 false--"false:空或者不是 Number 类型"
// 5、其余情况，输出 num--"num:我不能被3或5整除".

// 第 1 种写法:
// 数据类型有:String,Number,Boolean,Object,Array,Undefined,Null,Function 共8种类型
// var mynum = [2,3,6,7,10,11,'x',15,30,35,50,'apple',60,90,true,[1,2]];
// for (var i = 0; i < mynum.length; i++) {
// 	var val = mynum[i];
// 	switch (typeof val) {
// 		case "number":
// 				if(val%5 === 0 && val%3 === 0){
// 					console.log(val+"是15的倍数");
// 				} else if(val%5 === 0){
// 					console.log(val+"只是5的倍数");
// 				} else if(val%3 === 0){
// 					console.log(val+"只是3的倍数");
// 				} else{
// 					console.log(val);
// 				}
// 			break;
// 		case "string":
// 		case "boolean":
// 		case "bject":
// 		case "array":
// 		case "null":
// 		case "function":
// 			console.log(false+":"+val+"不是Number型");
// 			break;
// 		default:
// 		console.log(val);
// 	}
// }


// 第 2 种写法:
// var num = [2,6,8,10,'',15,30,35,50,'',60,'orange',90];
// var i = 0;
// while (i < num.length) {
// 	var myNum = num[i];
// 	if(typeof(myNum)!='number' || myNum == '' || myNum == 'string'){
// 			console.log(false +":" + myNum + "不是number型");
// 		}else if (  myNum%3 === 0 && myNum%5 === 0 ) {
// 			console.log(myNum + '是15的倍数');
// 		}else if ( myNum%5 === 0 ) {
// 			console.log(myNum + '是5的倍数');
// 		}else if ( myNum%3 === 0 ) {
// 			console.log(myNum + '是3的倍数');
// 		}else{
// 			console.log(myNum);
// 		}
// 		i++;
// }

// 第三种:
var num = [2,6,8,10,'',15,30,35,50,'ff',60,'orange',90];
for (var i = 0; i < num.length; i++) {
	var my_num = num[i]
	if (typeof my_num === "number") {
		if (my_num%3 === 0 && my_num%5 === 0 ) {
			console.log(my_num + '是15的倍数');
		}else if ( my_num%5 === 0 ) {
			console.log(my_num + '是5的倍数');
		}else if ( my_num%3 === 0 ) {
			console.log(my_num + '是3的倍数');
		}else{
			console.log(my_num);
		}
	} else if (typeof my_num != "number") {
		console.log(false + ":" + my_num  + "不是Number型");
	} else{
		console.log(my_num);
	}
}
