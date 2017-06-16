require(['config'],function(){
	require(['carousel'],function(car){
		//轮播图
		$('#banner .carouselBox').lxCarousel({
			imgs:['img/img1.png','img/img2.png','img/img3.png','img/img4.png','img/img5.png'],
			autoPlay:true,
		});
		//导航栏下的3级菜单的显示隐藏
		$('nav .bottom .list1 .tap').on('mouseenter','li',function(){
			$(this).find('.content').show();
		}).on('mouseleave','li',function(){
			$(this).find('.content').hide();
		});
		//右侧固定栏
		//回到顶部
		$('#fix_right').find('li').last().on('click',function(){
			$(this).css({'color':'red','font-size':'20px'})
			$('body').animate({scrollTop:0},1000)
			//打开二维码	
		}).eq(-2).on('mouseenter','span',function(){
			$(this).children().css({'display':'block'})
		})
		
		


	})
})