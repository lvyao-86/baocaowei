



;(function($){
	$.fn.zxCarousel = function(option){
		//设定默认值,默认垂直轮播
		var defaultd = {
			index:0,
			width:810,
			height:320,
			autoPlay:true,
			duration:3000,
			type:'horizontal'//vertial,horizontal,fade,show
			//.....
		};
		var opt = $.extend({},defaultd,option);
		this.each(function(){
			//建立图片
			$(this).addClass('carouesel');
			var ul = $('<ul/>');
			ul.html($.map(opt.img,function(item,idx){
				return `<li><img src="${item}"></li>`
			}).join(''))
			$(this).append(ul);
			//复制第一张图片,实现无缝
			var cloneLi = ul.children().eq(0).clone();

			ul.append(cloneLi);
			//建立页码
			var page = $('<div/>').addClass('page');
			page.html($.map(opt.img,function(item,idx){
				if(idx===0){
					return `<span class="active">${idx}</span>`
				}else{
					return `<span>${idx}</span>`
				}
				
			}).join(''));
			$(this).append(page);


			showPic();
			if(opt.autoPlay === true){
				setInterval(function(){
					opt.index++
					showPic();
				},opt.duration)
			}
			
			function showPic(){
				


				if(opt.type === 'vertial'){
					if(opt.index>=opt.img.length+1){
						ul.css({top:0});

						opt.index = 0;
						return;
					}
					ul.animate({top:-opt.height*opt.index})
				}else if(opt.type === 'horizontal'){
					if(opt.index>=opt.img.length+1){
						ul.css({left:0});

						opt.index = 0;
						return;
					}
					ul.children().css({float:'left'});
					ul.css({width:opt.width*(opt.img.length+1)})
					ul.animate({left:-opt.width*opt.index})
				}else if(opt.type === 'fade'){
					if(opt.index>=opt.img.length){
						opt.index=-1;
						return;
					}
					ul.children().css({position:'absolute',top:0,left:0});
					ul.css({position:'relative',height:opt.height});
					ul.children().eq(opt.index).fadeIn(1000).siblings().fadeOut(1000);
				}
				
				if(opt.index>=opt.img.length){
					page.children().eq(0).addClass('active').siblings().removeClass('active');
				}else{
					page.children().eq(opt.index).addClass('active').siblings().removeClass('active');
				}
				
			}




		})
	}

})(jQuery);