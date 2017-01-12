var row_id = 999;
var stage_id = 'wn2016';
var type = 10;
var cnum = 1;


var com_flag = true;
//提交评论（回复）
function addCom(obj){    
    var comment = $('#comment').val();
    // var openId =  '123';
    // var uname = '小L';
    // var uheadimg = 'http://wx.qlogo.cn/mmopen/dLJXJ4ML6d0FbrQOIPWEvhoxUY2wYctSz1KdCSK7Tmm1g8BvC6H1iaggiaGYcCHE4BAqQkIsWnUNjia0guFV80Ticw/0';
    // var country = '中国';
    // var province = '北京';
    // var city = '北京';

    var openId =  $.cookie('openid');
    var uname = $.cookie('nickname');
    var uheadimg = $.cookie('headimg');
    var country = $.cookie('country');
    var province = $.cookie('province');
    var city = $.cookie('city');
    if(comment == ''){
        alert("请填写评论内容");
        return false;
    }
    if(comment.length > 10){
        alert("评论内容不能超过6个字符！");
        return false;
    }
    var html = '';
    var url = "http://gzweb.ctvit.tv/wn2016_gz/index.php?s=/Api/Comment/add";
    if(com_flag == true){
        com_flag = false;
        $.ajax({
            url : url,
            type : 'GET',
            dataType:"jsonp",
            jsonp:"callback",
            data:{openId:openId,uname:uname,upic:uheadimg,comment:comment,row_id:row_id,type:type,stage_id:stage_id,country:country,province:province,city:city},
            success : function(json) {
                com_flag = true;
                if(json.code == 0){
                    alert("长按保存图片，并发送朋友圈");
                    $('#comment').val('');
                    $('#userMainword').hide();
					$('#keywordMap').show();
                    var drawCanvas = new DrawCanvas();
                }else{
                    alert(json.msg);
                    $('#userMainword').hide();
					$('#keywordMap').show();
                    var drawCanvas = new DrawCanvas();
                }

            },
            //timeout:3000,
            error:function(){
                com_flag = true;
                $('#userMainword').hide();
				$('#keywordMap').show();
                var drawCanvas = new DrawCanvas();
            }
        });

    }
}
