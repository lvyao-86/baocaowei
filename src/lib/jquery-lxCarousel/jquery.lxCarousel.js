/*
	轮播图插件
	$不一定就是jQuery
 */
;(function($){
	// $.prototype = $.fn
	$.fn.lxCarousel = function(options){
		// 默认值
		var defaults = {
			width:220,
			height:232,
			index:0,
			autoPlay:true,
			duration:3000,
			type:'horizontal'//vertial,horizontal,fade,show
		}

		// 覆盖默认值
		var opt = $.extend({},defaults,options);

		// 这里的this指向实例：$('.carousel')

		// 遍历jquery对象
		// 解决多个jquery对象使用插件的问题
		this.each(function(){

			// 这里的this指向DOM节点
			
			// 给this添加插件样式
			$(this).addClass('lxCarousel');


			// 生成图片结构
			var $ul = $('<ul/>');
			$ul.html($.map(opt.imgs,function(item,idx){
				return `<li><img src="${item}"></li>`;
			}).join(''));

			$(this).append($ul);

			// 生成页码 
			var $page = $('<div/>').addClass('page');
			$page.html($.map(opt.imgs,function(item,idx){
				if(idx==0){
					return `<span class="active">${idx+1}</span>`;
				}else{
					return `<span>${idx+1}</span>`;
				}
			}).join(''));
			$(this).append($page);

			// 默认索引值
			// 默认显示第一张图
			var index = 0;

			setInterval(function(){
				index++;
				console.log(index)
				showPic();
			},3000);

			
			function showPic(){
				if(index > opt.imgs.length-1){
					index = 0;}
				else if(index < 0){
					index = opt.imgs.length-1;
				}

				// 轮播动画
				//垂直
				if(opt.type=='vertial'){
					$ul.animate({top:-opt.height*index});
					//水平
				}else if(opt.type=='horizontal'){
					$ul.width(opt.width*opt.imgs.length)
					var $lis=$('ul li')
					// console.log($lis)
					$lis.get().forEach(function(item){
						// console.log(item)
						$(item).css({float:'left'})
					})
					$ul.animate({left:-opt.width*index},2000)
				}else if(opt.type=='fade'){
					// console.log(index)
					$ul.find('li').css({position:'absolute',top:0,left:0});
					$ul.css({position:'relative',height:opt.height});
					$ul.children('li').eq(index).fadeIn(1000).siblings().fadeOut(1000);
				}
				

				// 给页码添加高亮
				$page.children().eq(index).addClass('active').siblings().removeClass('active');
			}
		});

		// 为了链式调用
		return this;
	}

	// $.fn.extend({
	// 	lxCarousel:function(){},

	// })
})(jQuery);