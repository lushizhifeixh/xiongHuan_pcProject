// 加载头部
$(function(){//ready
$("#header_html").load("/html/comm/header.html",function(){//header_html	
 	// header_nav
$(".right_subnav").hover(function(){
	$(this).find("span").css({
		background:"#fff"
	});
	$(this).find("ul").show().css({
		background:"#fff"
	});
},function(){
	$(this).find("span").css({
		background:"#fff"
	});
	$(this).find("ul").hide();
});
// sub_nav
$(".mynav01").hover(function(){
	$(this).find(".position").show();
},function(){
	$(this).find(".position").hide();
 });
// 吸顶菜单
// 登录
$("#login_user").on("click",function(){
	// 登录块
	$("#alert_login").css({
		display:"block",
		position:"absolute",
		left:0,
		right:0,
		top:0,
		bottom:0,
		margin:"auto",
		width:"400px",
		height:"400px",
		zIndex:999
	});
	// 大朦板
	
	$("html,body").css({
		height:"100%"
	});
	$("<div class='mybg'></div>").appendTo($("body"));
	$(".mybg").css({
		background:"#000",
		width:"100%",
		height:"100%",
		position:"absolute",
		top:0,
		left:0,
		opacity:0.4,
		zIndex:500,
	});
	
})//登录
//注册
$("#register_user").on("click",function(){
	// 登录块
	$("#alert_register").css({
		display:"block",
		position:"absolute",
		left:0,
		right:0,
		top:0,
		bottom:0,
		margin:"auto",
		width:"520px",
		height:"500px",
		zIndex:999,
		background:"#ffff00"
		
	});
	// 大朦板
	
	$("html,body").css({
		height:"100%"
	});
	$("<div class='mybg'></div>").appendTo($("body"));
	$(".mybg").css({
		background:"#000",
		width:"100%",
		height:"100%",
		position:"absolute",
		top:0,
		left:0,
		opacity:0.4,
		zIndex:500,
	});
	
})//登录
//注册
// function show(){
// 	 $("#alert").show();
// 	// var mybg=$("<div></div>");
// 	// mybg.appendTo($(document));
	
// }
// 注册
//购物车

 
});//header_html
})//ready