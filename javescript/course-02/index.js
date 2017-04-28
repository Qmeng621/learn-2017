var arr = [1,5,'将数组清空的一个有效办法，就是将数组的 length 属性设为 0。'];

var arr2 =[];
arr2[0] = 'xx';
arr2[1] = 'yy';
arr2[2] = 'zz';
console.log(arr2);
console.log(arr[2]);


//可以装什么:任意一种类型的数据，都可以放进数组里,如:String,Number,Boolean,Object,Array,Undefined,Null,Function 共8种类型
var arr3 = ['x', {a:1}, [1, 2, 3], function(){ return true; }];
console.log(arr3[2]);
console.log(arr3[2][0]);
console.log(arr3.length);
//数组的 length 属性是一个动态的值，等于键名中最大值加 1

var arr4 = ['a', 'b'];
arr4[1000] = 'zyx';
console.log(arr4.length);
//数组的数字键值不需要连续，length 属性的值总是等于最大的那个键值加 1。
//将数组清空的有效办法是把数组的长度.length设置为 0
//length 属性是可写的。如果人为的设置一个小于当前成员个数的值，该数组的成员会自动减少到 length

var arr5 = new Array(6);
console.log('arr5的长度是'+arr5.length);


//数组赋值
var myarr = new Array(3);
myarr[0] = "小五";
myarr[1] = "大H";
myarr[2] = "月影";
console.log("班里学号为 0 的是：" + myarr[0]);
console.log("班里学号为 1 的是：" + myarr[1]);
console.log("班里学号为 2 的是：" + myarr[2]);

var yourarr = [1, "abc", myarr];
console.log(yourarr[1]);


//数组的增加
var myarr = new Array(4);
myarr[0] = "小北";
myarr[1] = "your";
myarr[2] = "QQ";
myarr[3] = "CC";
console.log("班里学号为 0 的是：" + myarr[0]);
console.log("班里学号为 1 的是：" + myarr[1]);
console.log("班里学号为 2 的是：" + myarr[2]);
console.log("班里学号为 3 的是：" + myarr[3]);

myarr[4] = "班长饿了么";
console.log(myarr[4]);


//练习01
var mygirl = ['木子','月影','涂涂','小青','小凡','小伟','芬芳','闪闪','小方','小白'];
for (var i = 0; i < mygirl.length; i++) {
	console.log(mygirl[i]);
}


//练习02
var mynum =[1,2,3,4,5,6,7,8,9,10]
var mysum = 0;

for (var i = 0; i < mynum.length; i++) {
	mysum = mynum[i] + mysum;
	console.log(mysum);
	//	console.log(mysum);写在当循环体内,它会输出mynum的从头加到尾的每一个值 ;
};
	console.log('mynum的总和是'+mysum);
	//console.log(mysum)写在循环体外边;当循环完之后,就跳出循环,输出变量mysum的值 ;
