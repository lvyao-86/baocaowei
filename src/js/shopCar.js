require(['config'],function(){
	require(['jquery','common'],function($,common){
		var carList = document.getElementById('carList');
		var btnClear = document.getElementById('btnClear');
		var subPrice = document.getElementsByClassName('subPrice')[0];

		// 获取cookie商品信息
		var goodslist = common.getCookie('goodslist');
			console.log(goodslist)
		// 把json字符串转换成数组/对象
		// JSON.parse(json)
		goodslist = goodslist ? JSON.parse(goodslist) : [];

		render();
		var subtract =$('.subtract');
		var plus = $('plus');
		console.log(subtract,plus)
		function render(){
			// 总价
			var totalPrice = 0;

			// var ul = document.createElement('ul');
			carList.innerHTML = '';
			carList.innerHTML = goodslist.map(function(goods){
				// 计算总价
				console.log(goods.price.match(/[\d.]+/)[0])
				var goods_price=goods.price.match(/[\d.]+/)[0];
				var money =(goods_price*goods.qty).toFixed(2);
				totalPrice +=goods_price*goods.qty;
				console.log(goods.qty)
				return  `
						<ul data-guid="${goods.guid}">
							<li><input type="checkbox"></li>
							<li class="widen"><div class="smallImg"><img src="${goods.imgurl}" width="100" height="100"></div></li>	
							<li class="widen">百草味_${goods.name}<br />零食坚果${goods.feature} <br /> ${goods.weight}</li>
							<li class="widen">￥${goods_price}</li>
							<li class="widen"><button class="subtract" >-</button>
								<input id="QTY" type="text" value="${goods.qty}"><button class="plus">+</button></li>
							<li class="widen">￥${money}</li>
							<li class="widen" id="btn-close" >删除</li>
						</ul>
							`
					
				// '<li data-guid="'+goods.guid+'"><img src="'+goods.imgurl+'"><h4>'+goods.name+
				// '</h4><p class="price">'+goods.price+'&times;'+goods.qty+'</p><span class="btn-close">&times;</span></li>'
			}).join('');

			
			// carList.appendChild(ul);
			subPrice.innerText = totalPrice.toFixed(2);
		}


		// 清空购物车
		btnClear.onclick = function(e){
			$(this).css({color:'red'});
			removeCookie('goodslist');

			// 清空DOM节点
			carList.innerHTML = '';
			subPrice.innerHTML = '';

			e.preventDefault();
		}

		// 删除单个商品
		carList.onclick = function(e){
			e = e || window.event;
			var target = e.target || e.srcElement;
				console.log(target.className)
			if(target.id=== 'btn-close'){

				var currentUl = target.parentNode;
				var guid = currentUl.getAttribute('data-guid');

				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid === guid){

						// 删除数组中对应的商品
						goodslist.splice(i,1);

						// 重新写入cookie
						common.setCookie('goodslist',JSON.stringify(goodslist));

						break;
					}
				}


				// 删除DOM节点
				// removeChild
				// currentLi.parentNode.removeChild(currentLi);
				render();
			}
			if(target.className==='subtract'){
				var currentUl = target.parentNode.parentNode;
				var guid = currentUl.getAttribute('data-guid');
				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid===guid){
						goodslist[i].qty--;
						console.log(goodslist[i].qty)
						// 重新写入cookie
						common.setCookie('goodslist',JSON.stringify(goodslist));
						break;
					}	
				}
				render();
			}
			if(target.className==='plus'){
				var currentUl = target.parentNode.parentNode;
				var guid = currentUl.getAttribute('data-guid');
				for(var i=0;i<goodslist.length;i++){
					if(goodslist[i].guid===guid){
						goodslist[i].qty++;
						// 重新写入cookie
						common.setCookie('goodslist',JSON.stringify(goodslist));
						break;
					}	
				}
				render();
			}		
		}
	})
})