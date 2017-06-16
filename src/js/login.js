require(['config'],function(){
	require(['jquery','validate','messages_zh'],function($,validate,messages_zh){
			$('#form').validate({
			    rules:{
				      mobile:{
				      	number:true
				      },
				      password: {
				        required: true,
				        minlength: 5
				      },
				      confirm_password: {
				        required: true,
				        minlength: 5,
				        equalTo: "#password"
				      },
				      email: {
				        required: true,
				        email: true
				      }
				    },
			    messages: {
				      username: {
			       	  required: "请输入用户名",
			      	  minlength: "用户名必需由两个字母组成"
			      		},
				      password: {
				        required: "请输入密码",
				        minlength: "密码长度不能小于 5 个字母"
				      },
				      confirm_password: {
				        required: "请输入密码",
				        minlength: "密码长度不能小于 5 个字母",
				        equalTo: "两次密码输入不一致"
				      },
				      email: "请输入一个正确的邮箱"
			    }
			})
		// $('#form').blur=function(e){
		// 	e = e || window.event;
		// 	var target =e.target || e.srcElement;
		// 	if(target.id==='mobile'){
		// 		var _pnum=$(this).value
		// 			if(!/^1[345789]\d{9}$/.test(_pnum)){
		// 				alert('手机号不正确')
		// 				return false;
		// 			}
		// 	}

		// }
		// 传递用户信息到后台
		// $('#zhuche').on('click',function(){
		
		// 	$.ajax({
		// 		url:'../api/reg.php',
		// 		data:{
		// 			username:$('#username').val(),
		// 			password:$('#password').val()
		// 		},
		// 		success:function(res){
		// 			console.log(res);
		// 			if(res === 'ok'){
		// 				alert('注册成功')
		// 			}
		// 		}
		// 	});
		// });
	});
});