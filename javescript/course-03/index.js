
// 判断语句 if
// 01 判断
// //if(条件){
//     //条件符合后执行的代码
// }
// var ages = 16;
// if (ages >= 18) {
// 	console.log('你成年了');
// }



// 02 二选一:当条件为 true 时执行代码，当条件为 false 时执行其他代码
// var age = 16;
// if (age >= 18) {
// document.write('你已经成年了');
// console.log('你已经成年了');
// }else {
// 	document.write('你未成年');
// 	console.log('你未成年');
// }




// 03 多种判断:使用该语句来选择多个代码块之一来执行,也就是说只执行其中一个的代码块
// if(条件1){
//     //条件1成立时执行的代码
// }else if(条件2){
//     //条件2成立时执行的代码
// }else if(条件n){
//     //条件n成立时执行的代码
// }else{
//     //条件1、2至n不成立时执行的代码
// }

// var age = 50;
// if (age >= 18 && age < 30) {
// document.write('你已经成年了');
// console.log('你已经成年了');
// } else if(age >= 30 && age < 40) {
// 	document.write('您奔四了');
// 	console.log('您奔四了');
// } else if (age >= 40 && age <= 65) {
// 	document.write('你快退休了');
// 	console.log('你快退休了');
// } else if(age > 65) {
// 	document.write('您要安度晚年了');
// 	console.log('您要安度晚年了');
// } else {
// 	document.write('你还是个学生');
// 	console.log('你还是个学生');
// }


// 04 swich语句
// switch 语句来选择要执行的多个代码块之一,也就是说只执行其中一个的代码块。并用 break 来阻止代码自动地向下一个 case 运行。
// 如果 case 后不写语句，则默认执行接下来 case 的语句。如所有 case 值都不匹配，则执行 default 后的语句。
// 为方便 switch 做判断，1 表示粥，2 表示米饭，3 表示面条，4 表示馒头
// var eat =3;
// switch (eat) {
// 	case 1://
// 	case 2://
// 		console.log('今天只能喝粥了');
// 	case 3:
// 		console.log('吃面条');
// 		break;
// 	default://上面所有的情况都不满足,只能执行最后一个的缺省值
// 		console.log('吃馒头');
// }



// 05 for语法结构 : 是判断再执行循环体.
// for(初始化变量; 循环条件; 循环迭代){
//     执行语句
// }
//工作原理：首先设置表达式 n（通常是一个变量）。随后表达式的值会与结构中的每个 case 的值做比较。如果存在匹配，则与该 case 关联的代码块会被执行。使用 break 来阻止代码自动地向下一个 case 运行。

// var eatArr = [2, 2, 3, 4, 2, 2]; // 吃饭选项数组
// // 循环条件设置
// for(var i = 0; i < eatA.length; i++){ // 循环开始大括号
// // 以下为循环内容
//     switch(eatArr[i]){
//         case 1:
//         case 2://数组对应的值与case的值一致,该 case 的代码块才会被执行。使用 break 来阻止代码自动地向下一个 case 运行。
//             console.log("米饭");
//             break;
//         case 3:
//             console.log("面条");
//             break;
//         default://当上边的条件都不满足的时候执行default代码块
//             console.log("馒头");
//     }
// } // 循环结束大括号



// 06 while语句:先判断,再执行循环
// var i = 0;// 循环起点设置，初始化变量
// while(循环条件){
//     执行语句
//     i++;// 使 i 自增
// }


// var eat_arr = [2, 2, 3, 4, 2, 2]; // 吃饭选项数组
// var i = 0;// 循环起点设置
// while(i < eat_arr.length)// 循环次数
// { // 循环开始大括号
// // 以下为循环内容
//     switch(eat_arr[i]){
//         case 1:
//         case 2:
//             console.log("米饭");
//             break;
//         case 3:
//             console.log("面条");
//             break;
//             default:
//             console.log("馒头");
//     }
//     i++;// 使 i 自增
// } // 循环结束大括号



// 07 do while:先执行一次循环体,再判断,条件满不满足,都会先执行一次
// do{
//     循环语句
// }
// while(判断条件)

// var num = 1;
// do{
//     document.write("数值为:" +  num+"<br />");
//     num++; //更新条件
// }
// while (num <= 5)



// 08
// var eat_arr = [2, 2, 3, 4, 2, 2]; // 吃饭选项数组
// var i = 0; // 设置起点
// var eat_max = 4; // 饭量最多够4个人吃
// while(i < eat_arr.length) // 循环次数
// { // 循环开始大括号
// // 以下为循环内容
//     if(i == eat_max) break;// 如果饭菜没了，队伍还在排，则告诉他们解散了
//     switch(eat_arr[i]){
//         case 1:
//         case 2:
//             console.log("米饭");
//             break;
//         case 3:
//             console.log("面条");
//             break;
//         default:
//             console.log("馒头");
//     }
//     i++; // 使 i 自增
// } //循环结束大括号



// 09 continue的作用是仅仅跳过本次循环，而整个循环仍然继续执行
var eat_arr = [2, 2, 3, 4, 2, 2]; // 吃饭选项数组
var i = 0; // 设置起点
var eat_null = 3; // 没钱童鞋的编号
while(i < eat_arr.length) // 循环次数
{ // 循环开始大括号
// 以下为循环内容
// 如果饭卡没钱了，就自己默默离开
    if(i == eat_null){
        i++;
        continue;
    }
    switch(eat_arr[i]){
        case 1:
        case 2:
            console.log("米饭");
            break;
        case 3:
            console.log("面条");
            break;
        default:
            console.log("馒头");
    }
    i++; // 使 i 自增
} // 循环结束大括号
