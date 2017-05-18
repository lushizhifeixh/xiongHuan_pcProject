// --------------------header_js------------------
$(function(){//ready
$("#header_html").load("html/comm/header.html",function(){//header_html	
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
//注册
$("#register_user").on("click",function(){
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
	
})
// ajax注册验证用户名
$("#username_register").blur(function(){
	$.getJSON("./php/user.php",{username:$(this).val()},function(data){
		 
		if(data.status===1){
			$("#p-use").text("用户名已经被注册")
		}else{
			$("#lg_info").text("√").css({
				color:"green",
				fontSize:"20px"
			})
		}
	});	
})
//点击注册按钮保存信息到服务器
	$("#btnRegister").on("click",function(){
		$.post("./php/register.php",{username:$("#username_register").val(),password:$("#password_register").val()},function(data){
			if(data.status===1){
				window.location="login.html"
			}
			console.log(data);
			console.log($("#username_register").val())
		},"json");
		
	});

//注册

//购物车
});//header_html
})//ready
// -------------------footer_js------------------
// 	// 加载尾部
 $("#footer_html").load("html/comm/footer.html");