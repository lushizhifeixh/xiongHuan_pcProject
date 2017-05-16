// 加载头部
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
// $("#oSpan").hover(function(){
// 	$(this).next().show();
// },function(){
// 	$(this).next().hide();
// });
// 吸顶菜单
// 登录
// 注册
//购物车


 });//header_html

