//原生js选项卡
// function btnCall()
// {
// 	var msgtitle=document.getElementById("msg_id");
// 	var calltitle=document.getElementById("call_id");
// 	msgtitle.className="hide";//当点击电话的时候msgtitle的className只有hide样式
// 	calltitle.className="msglist";//calltitle的时候calltitle的className只有msglist样式
// }
// function btnMsg()
// {
// 	var msgtitle=document.getElementById("msg_id");
// 	var calltitle=document.getElementById("call_id");
// 	msgtitle.className="msglist";
// 	calltitle.className="hide";
// }


//jQuery选项卡
//消息电话切换背景
var msg_id = $('#msg_id');
var call_id = $('#call_id');
var msgTitle = $('#msgtitle');
var callTitle = $('#calltitle');
msgTitle.on('click',function(){
	$(this).css({
		'background':'#fff',
		//'font-size':'10px',
		'color':'#08c'
	})
	callTitle.css({
		'background':'#08c',
		//'font-size':'10px',
		'color':'#fff'
	})
	msg_id.show();
	call_id.hide();
})
callTitle.on('click',function(){
	$(this).css({
		'background':'#fff',
		//'font-size':'10px',
		'color':'#08c'
	})
	msgTitle.css({
		'background':'#08c',
		//'font-size':'10px',
		'color':'#fff'
	})
	msg_id.hide();
	call_id.show();
})


var plusIcon = $('#plusIcon');
plusIcon.on('click',function(){
	$('.plusIconContent').toggleClass('show');
})

//触摸改变背景颜色
var aHref = $('.aHref');
aHref.on('touchstart',function(){
	$(this).css({
		'background':'rgba(0, 0, 0, 0.2)',
		'display':'block',
		'color':'#fff'
	})
})
