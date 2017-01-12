//取url中的参数
function getUrlParam(name){
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r!=null) return unescape(r[2]);
    return null;
}

//获取用户信息写入cookie
function getUserinfo(openId,waccountId){
	var url = 'http://csgl.ctvit.tv/appplatform/weixin/selectFansWaccountFans';
		$.ajax({
			url:url,
			type:"get",
			data:{'openId':openId, 'waccountId':waccountId},
			dataType:"jsonp",
			jsonp: "callback",
			success:function(msg){
				var userinfo = msg.rows;
				if(userinfo != undefined && userinfo !=''){
					$.cookie('nickname', userinfo.nickname,{expires : 1});
					$.cookie('image', userinfo.image,{expires : 1});				
					$.cookie('headimg', userinfo.headimg,{expires : 1});
				}
				window.location.href = 'index.html';
			}
		});

}


$(function() {
	var openId = getUrlParam('openId');
	var nickname = $.cookie('nickname');
	nickname = undefined;
	var waccountId = getUrlParam('waccountId');
	if(nickname == undefined) {
		if(openId != null && openId != undefined && openId != '') {
			$.cookie('openid', openId,{expires : 1});
			$.cookie('waccountId', waccountId,{expires : 1});
			getUserinfo(openId,waccountId);
		}
	} else {
		window.location.href = 'index.html';
	}
})
