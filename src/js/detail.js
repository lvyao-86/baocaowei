require(['config'],function(){
	require(['gdszoom'],function(gds){
		//执行放大镜，参数为大镜子的宽高和位置
		$('.fangdajing .goods').gdszoom({
			width:500,height:500,position:'right'
			});
		$('.fangdajing .smallList img').click(function(){
			$('.fangdajing .goods img').attr({
				'src':this.src,
				'data-big':this.src
			});
		})
	})
})