// 头部加载
$("#header_html").load("/html/comm/header.html");
// 产品中心加载
$("#product_center").load("/html/product/productCenter.html",function(){
	$("img.lazy").lazyload({
         effect : "fadeIn"
     });

	var $shopCart=$(".shop-cart");
	$shopCart.click(function(){
		console.log("nfdgf")
	});
});
// 尾部加载
$("#footer_html").load("/html/comm/footer.html");