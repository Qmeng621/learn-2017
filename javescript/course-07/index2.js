var now = new Date();
var weekday=["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var year = now.getFullYear();
var month = now.getMonth() + 1;//月份从0开始,要加 1
var date = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
console.log('今天是:' + year + '年' + month + '月' + date + '日' + hours + '分' + seconds + '秒');

var myDay = now.getDay();
console.log(myDay);
console.log('今天是:' + weekday[myDay]);
console.log('今天是:' + year + '年' + month + '月' + date + '日' + '' + weekday[myDay]);

// 作业01: 查找数组元素的位置，没有该元素则返回-1；例如：[1,2,4,6,8] 传入4返回2。
var myarr = [1,2,4,6,8];
function myChar(key){
	var key;
	if(key in myarr){
		console.log('传入的内容下标是:' + myarr.indexOf(key));
	}else{
		console.log('传入的内容不在数组内! 未查到,输出' + myarr.indexOf(key));
	}
}
myChar(8);
myChar(2);
myChar(5);

// 作业02: 将数组所有元素求和；例如：[1,2,3,4,5,'apple'] 求和得到15。
var myArr = [1, 2, 3, 4, 5, 6, 'apple'];
var myArr02 = [1, 2, 3, 4, 5, 6, 7 , 'apple'];
function mySum(myArr){
	var sum = 0;
	function aa(){
		for (var i = 0; i < myArr.length; i++) {
			if(typeof myArr[i] === 'number'){
				sum = sum + myArr[i];
			    //console.log(sum);
			}
		}
		return sum;
	}
	return aa;
}

var res01 = mySum(myArr);
console.log('数组myArr的求和的结果是:' + res01());

var res02 = mySum(myArr02);
console.log('数组myArr的求和的结果是:' + res02());


// 作业03: 移除数组中指定元素，不改变原数组；例如：[1,2,4,6,8] 传入4返回[1,2,6,8]
var myArray = [1, 3, 5, 5, 6, 8, 110];
function mydelete(val){
	if(val in myArray){
		for (var i = 0; i < myArray.length; i++) {
			if( val === myArray[i]){
				console.log(myArray.splice(i));
				console.log(myArray);
			}else{
				console.log('你输入的值不属于本数组');
			}
		}
	}
}
mydelete(3);
