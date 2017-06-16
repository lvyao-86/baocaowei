require.config({
	// baseUrl:js
	//解决缓存问题
	urlArgs: 'v='+ Date.now(),
	paths:{
		'jquery': '../lib/jquery-3.2.1',
		'validate': '../lib/jquery-validate/jquery.validate',
		'messages_zh': '../lib/jquery-validate/localization/messages_zh',
		'carousel': '../lib/jquery-lxCarousel/jquery.lxCarousel',
		'gdszoom': '../lib/jquery-gdszoom/jquery.gdszoom',
		'common': 'common_module'
	},
	//添加依赖
	shim:{
		'carousel':['jquery'],
		'gdszoom':['jquery'],
		'common':['jquery'],
		'validate':['jquery'],
		'messages_zh':['validate']
	}

})