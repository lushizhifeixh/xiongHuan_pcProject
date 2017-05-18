
// 产品中心加载
$("#product_center").load("html/productCenter.html",function(){
	$("img.lazy").lazyload({
         effect : "fadeIn"
     });

	var $shopCart=$(".shop-cart");
	$shopCart.click(function(){
		console.log("nfdgf")
	});
});
