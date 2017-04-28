// 案例01
var inp_num = document.getElementById("inp_num")
var aler = document.getElementById("aler")
aler.onclick = function(){
	setTimeout("inp_num.value = 1", 1000);
	setTimeout("inp_num.value = 2", 2000);
	setTimeout("inp_num.value = 3", 3000);
	setTimeout("inp_num.value = 4", 4000);
	setTimeout("alert('计时结束')", 5000);
}
// // 如果说外层已有一对双引号，里面就必须为单引号。语法为双单.
