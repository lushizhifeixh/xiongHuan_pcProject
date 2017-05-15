$("#content_html").load("/html/comm/allcontent.html",function(){//content_html
	// 1左右轮播图

	// 2秒杀

	//3. 上下轮播图

	// 4.加入购物车

	//5.楼梯导航

	//6添加到购物车的显示/隐藏
	$("a").hover(function(){
		$(this).find(".shop-cart").stop().animate({
			bottom:"6px"
		},1000/6)
	},function(){
		$(this).find(".shop-cart").stop().animate({
			bottom:"-30px"
		},1000/6)
	});
	// 

});//content_html