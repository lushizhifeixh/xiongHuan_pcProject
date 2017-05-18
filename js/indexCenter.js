$(function(){//ready
	$("#center_html").load("html/indexCenter.html",function(){//center
		
		/*1左右轮播图*/

		/* 2秒杀*/

		/*3. 上下轮播图*/

		/* 4.加入购物车*/

		/*5.楼梯导航*/
		var height=$(".floor:first").offset().top,
			winHeight=$(window).height(),
			autoScroll=false;
			// 判断是否显示侧边栏
		$(window).on("scroll",function(){//
			if(autoScroll)
				return;
			var _scrollTop=$(window).scrollTop();
			if(_scrollTop>height-winHeight/2){
				$("#aside_bar").stop().fadeIn(600);
			}else{
				$("#aside_bar").stop().fadeOut(600);
			}
		
			// 处理侧边栏楼层导航显示
			$(".floor").each(function(index,element){
				var height=$(".floor").eq(index).offset().top;
				if(_scrollTop>height-winHeight/2){
					$("#aside_bar li").eq(index).addClass("curr").children("span").show()
									  .end().siblings("li").removeClass("curr").find("span").hide();
				}
			});
		});//
		// 鼠标移动导航 li 显示汉字：事件委派
		$("#aside_bar").on("mouseenter","li",function(){
			$(this).find("span").show();
		}).on("mouseleave","li",function(){
			$(this).not(".curr").find("span").hide();
		}).on("click","li:not(:last)",function(){
			var index=$(this).index();
			var _top=$(".floor").eq(index).offset().top;
			$("html body").stop().animate({
				scrollTop:_top
			},1000/6,function(){
				autoScroll=false;
			});
			autoScroll=true;
			$(this).addClass("curr").children('span').show().end()
				   .siblings('li').removeClass("curr").children('span').hide();
		});
		// 回到顶部
		$("#aside_bar li:last").click(function(){
			$("html body").stop().animate({scrollTop:0},1000/6,function(){
				autoScroll=false;
			});
				autoScroll=true;
		})


		/*6添加到购物车的显示/隐藏*/
		$("a").hover(function(){
			$(this).find(".shop-cart").stop().animate({
				bottom:"6px"
			},1000/6)
		},function(){
			$(this).find(".shop-cart").stop().animate({
				bottom:"-30px"
			},1000/6)
		});
		
	});//center
})//ready