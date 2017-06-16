require(['config'],function(){
	require(['jquery','common'],function($,common){
		let $goods = $('.goods');
		let pageNo = 1;
		let qty = 10;

		// 请求数据
		$.ajax({
			url:'../api/classify.php',
			dataType:'json',
			data:{
				page:pageNo,
				qty:qty
			},
			success:function(res){
				showList(res);

				// 显示分页
				var pageQty = Math.ceil(res.total/res.qty);

				var page_str = '';
				for(var i=1;i<=pageQty;i++){
					page_str += `<li ${res.pageNo==i?'class="active"':''}><a href="#">${i}</a></li>`
				}

				$('.pagination').html(page_str);
			}
		});

		// 点击分页切换
		$('.pagination').on('click','a',function(){
			$(this).parent().addClass('active').siblings().removeClass();
			pageNo = $(this).text();

			$.ajax({
				url:'../api/classify.php',
				dataType:'json',
				data:{
					page:pageNo,
					qty:qty
				},
				success:function(res){
					showList(res);
				}
			});

			return false;
		});
		function showList(res){
			let html = res.data.map(item=>{
				return `
					<div class="col-sm-3 col-md-3" >
						<div class="thumbnail" >
							<img src="../${item.imgurl.replace('goods','')}" alt="...">
							<div class="caption" data-guid="${item.id}">
								<h4>【${item.name}】</h4>
								<p class="feature">风味特色 ：${item.feature}</p>
								<p class="weight">净含量 ：${item.weight}袋 </p>
								<p class="price">价格：${item.price}元</p>
								<p>
									<button class="btn btn-primary btn-xs btn-add">添加购物车</button>
								</p>
							</div>
						</div>
					</div>
				`
			}).join('');
			$goods.html(html);
		};
		//显示隐藏切换
		$('nav .bottom span').on('mouseenter',function(){
			var $ul=$(this).find('ul')
			$ul.show();
		}).on('mouseleave',function(){
			var $ul=$(this).find('ul')
			$ul.hide();
		});
		$('#goodslist .left').on('mouseenter','li',function(){

			if($(this).find('ul')){
				$(this).find('ul').show();
			}
		}).on('mouseleave','li',function(){
			if($(this).find('ul')){
				$(this).find('ul').hide();
			}
		});				
		$('nav .list2').on('mouseenter' ,'a',function(){
			$(this).css({'background':'white','color':'#D6362A'})
		}).on('mouseleave' ,'a',function(){
			$(this).css({'background':'#D6362A','color':'white'})
		});

		//点击购物车，添加cookies
		var goods = document.getElementsByClassName('goods')[0];
			//Unexpected end of JSON input
			//JSON.parse中的字符串不符合规则
			var goodslist = common.getCookie('goodslist');
			goodslist = goodslist ? JSON.parse(goodslist) : [];

			// 给button绑定点击事件
			// 利用事件委托
			goods.onclick = function(e){
				e = e || window.event;
				var target = e.target || e.srcElement;

				if(target.tagName.toLowerCase() === 'button'){
					// 获取thumbnail
					var caption = target.parentNode.parentNode;
					console.log(caption)
					// 获取当前商品的guid
					var guid = caption.getAttribute('data-guid');

					// 关键：判断当前商品是否存在cookie
					for(var i=0;i<goodslist.length;i++){
						if(goodslist[i].guid === guid){
							goodslist[i].qty++;
							break;
						}
					}
					console.log(caption.previousElementSibling, guid)
					// 商品不存cookie中
					if(i===goodslist.length){
						// 获取<当前>商品的信息
						var goods = {
							guid:guid,
							imgurl:caption.previousElementSibling.src,
							name:caption.children[0].innerText,
							feature:caption.children[1].innerText,
							weight:caption.children[2].innerText,
							price:caption.children[3].innerText,
							qty:1
						};

						// 往数组中添加当前商品
						goodslist.push(goods);
					}

					

					// 设置cookie
					// cookie保存的是字符串
					// JSON.stringify()：把对象/数组转成json字符串
					common.setCookie('goodslist',JSON.stringify(goodslist));
				}
			}
	});
});