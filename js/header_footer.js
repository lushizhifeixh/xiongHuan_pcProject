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
/*注册页面*/
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
	
});

/* 正则验证*/
/*ajax注册验证用户名*/ 
$("#username_register").blur(function(){
	 var reg=/^[a-zA-Z]\w{5,19}$/;
	 if(reg.test($(this).val())){
	 	// $("#p_use").hide();
		$.getJSON("./php/user.php",{username:$(this).val()},function(data){		 
		    if(data.status===1){
				$("#lg_info").text("×用户名已经被注册").css({
					color:"red"
				});
			}else{
				$("#lg_info").text("√").css({
					color:"green",
					fontSize:"20px"
				});		
			}		
		});	
	}else{
		$("#p_use").show();
	 }	
});
/*验证密码*/
$("#password_register").on("blur",function(){
	var reg=/^\w{6,}$/;
	if(reg.test($(this).val())){
		$("#r_pwd").text("√").css({
			color:"green",
			fontSize:"20px"
		});		
		$("#p_pwd").hide();
	}else{
		$("#p_pwd").show();
	}
});
/*验证密码是否一致*/
$("#password_regin").on("blur",function(){
	 if($(this).val()!==$("#password_register").val()){
		$("#diff").show();
	 }else{
	 	$("#r_sucs").text("√").css({
			color:"green",
			fontSize:"20px"
		});		
	 }
	
});


//http://route.showapi.com/26-4?showapi_appid=33237&showapi_sign=ee80a64dcd7f43e488e748df7f27f5d3&border=&border_color=105

/*图片验证码*/ 

// $("#pic_change").on("click",function(){
// 	$.getJSON("",{},function(){

// 	});
// });
/*表单点击的时候错误信息消失*/ 
$("#username_register").click(function(){
	$("#p_use").hide();
});
$("#password_register").click(function(){
	$("#p_pwd").hide();
});
$("#password_regin").click(function(){
	$("#diff").hide();
});
$("#pwd_test").click(function(){
	$("#y_error").hide();
});
/*点击注册按钮保存信息到服务器*/
	$("#btnRegister").on("click",function(){
		$.post("./php/register.php",{username:$("#username_register").val(),password:$("#password_register").val()},function(data){
			if(data.status===1){
				window.location="login.html"
			}else{
				$('#regist_error').show();
			}
			console.log(data);
			console.log($("#username_register").val())
		},"json");
		
	});

/*用户登录*/
$("#btnLogin").click(function(){
	$.post("php/login.php",{username:$("#username").val(),password:$("#password").val()},function(data){
			if(data.status===1){
				var user = data.userinfo;
				$.cookie.json = true;
				$.cookie('loginuser', user, {expires:7, path:'/'});
				alert('登录成功! '+user.username+' 欢迎回来!');
			 	window.location = "index.html";
			}else{
				$("#login_info").show();
		}				
	},"json");
});
$("#password,#username").on("click",function(){
	$("#login_info").hide();
});
/*回到页面并显示用户名*/
/*购物车*/

});//header_html
})//ready
// -------------------footer_js------------------
// 	// 加载尾部
 $("#footer_html").load("html/comm/footer.html");