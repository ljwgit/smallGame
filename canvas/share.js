var title = '温暖2016小游戏—你的2016温暖关键词';
//分享  ---用的时候需要进行修改
function fenxiang() {
	wx.onMenuShareTimeline({
		title: title, // 分享标题
		link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc70481b1a19ef267&redirect_uri=http%3A%2F%2Fcsgl.ctvit.tv%2Fappplatform%2Fweixin%2FredirectWaccountRedirect&response_type=code&scope=snsapi_userinfo&state=Wacc14806949957481000014snsapi_userinfo#wechat_redirect', // 分享链接
		imgUrl: 'http://pagegz.ctvit.tv/smallGame/addImg/zhuyu.png', // 分享图标
		success: function () { 
			// 用户确认分享后执行的回调函数
			
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});


	wx.onMenuShareAppMessage({
		title: title, // 分享标题 
		desc: '参加这个小游戏，和朋友比比关键词谁接的更多，在2016的年末岁尾一起与CCTV《艺术人生》围炉夜话', // 分享描述
		link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc70481b1a19ef267&redirect_uri=http%3A%2F%2Fcsgl.ctvit.tv%2Fappplatform%2Fweixin%2FredirectWaccountRedirect&response_type=code&scope=snsapi_userinfo&state=Wacc14806949957481000014snsapi_userinfo#wechat_redirect', // 分享链接
		imgUrl: 'http://pagegz.ctvit.tv/smallGame/addImg/zhuyu.png', // 分享图标
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () { 
			// 用户确认分享后执行的回调函数
			
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareQQ({
		title: title, // 分享标题
		desc: '参加这个小游戏，和朋友比比关键词谁接的更多，在2016的年末岁尾一起与CCTV《艺术人生》围炉夜话', // 分享描述
		link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc70481b1a19ef267&redirect_uri=http%3A%2F%2Fcsgl.ctvit.tv%2Fappplatform%2Fweixin%2FredirectWaccountRedirect&response_type=code&scope=snsapi_userinfo&state=Wacc14806949957481000014snsapi_userinfo#wechat_redirect', // 分享链接
		imgUrl: 'http://pagegz.ctvit.tv/smallGame/addImg/zhuyu.png', // 分享图标
		success: function () { 
		   // 用户确认分享后执行的回调函数
		},
		cancel: function () { 
		   // 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareWeibo({
		title: title, // 分享标题
		desc: '参加这个小游戏，和朋友比比关键词谁接的更多，在2016的年末岁尾一起与CCTV《艺术人生》围炉夜话', // 分享描述
		link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc70481b1a19ef267&redirect_uri=http%3A%2F%2Fcsgl.ctvit.tv%2Fappplatform%2Fweixin%2FredirectWaccountRedirect&response_type=code&scope=snsapi_userinfo&state=Wacc14806949957481000014snsapi_userinfo#wechat_redirect', // 分享链接
		imgUrl: 'http://pagegz.ctvit.tv/smallGame/addImg/zhuyu.png', // 分享图标
		success: function () { 
		   // 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareQZone({
		title: title, // 分享标题
		desc: '参加这个小游戏，和朋友比比关键词谁接的更多，在2016的年末岁尾一起与CCTV《艺术人生》围炉夜话', // 分享描述
		link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc70481b1a19ef267&redirect_uri=http%3A%2F%2Fcsgl.ctvit.tv%2Fappplatform%2Fweixin%2FredirectWaccountRedirect&response_type=code&scope=snsapi_userinfo&state=Wacc14806949957481000014snsapi_userinfo#wechat_redirect', // 分享链接
		imgUrl: 'http://pagegz.ctvit.tv/smallGame/addImg/zhuyu.png', // 分享图标
		success: function () { 
		   // 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});
}

//关闭当前网页
function closeWindow(){
	wx.closeWindow();
}


//获取JS-SDK的使用签名
function sign() {
	 var url = location.href.split('#')[0];
	 $.ajax({
		type: "get",
		url: 'http://csgl.ctvit.tv/appplatform/util/signinfo?r=' + Math.random(),
		dataType: "jsonp",
		jsonp: "callback",
		data:{'url':url,'appId':'wxc70481b1a19ef267'},
		success: function(rs){
			wxconfig(rs);
		},
		error: function(){}
	});
}

//微信接口配置
function wxconfig(rs) {
	wx.config({
		debug: false,
		appId: 'wxc70481b1a19ef267',
		timestamp: rs.timestamp,
		nonceStr: rs.nonceStr,
		signature: rs.signature,
		jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone',
					'closeWindow'
					]
	});
}

$(function() {
	sign();
	setTimeout(function(){
		fenxiang()
	}, 1000);
})
