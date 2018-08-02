
 var $wx_account = wxdata.wx_account,
 $wx_share = wxdata.wx_share;
 
//配置微信信息
wx.config ({
    debug : false,
    appId : $wx_account[0],
    timestamp : $wx_account[1],
    nonceStr : $wx_account[2],
    signature : $wx_account[3],
    jsApiList : [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
    ]
});
//alert("shareimg="+$wx_share[0]);
//alert("shareurl="+$wx_share[1]);
//alert("desc="+$wx_share[2]);
//alert("title="+$wx_share[3]);

wx.ready (function () {
//	alert("初始化shareData");
    // 微信分享的数据
    var shareData = {
        "imgUrl" : $wx_share[0],
        "link" : $wx_share[1],
        "desc" : $wx_share[2],
        "title" : $wx_share[3],
        success : function () {
//        	alert("成功分析");
        	// 分享成功可以做相应的数据处理
//        	callback();
        	$.ajax({
        		type:"POST",
        		url:"/shareToFriendEnd",
        		data:{pageId:$("#pageId").val(),openId:$("#openId").val(),parentOpenId:$("#parentOpenId").val()},
        		dataType:"json",
        		cache:false,
        		success:function(data){
        		}
        	});
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
//        	alert("用户取消分享后执行的回调函数");
        },
        fail: function (res) {  
        	alert(res.errMsg);  
        }
    };
    wx.onMenuShareTimeline (shareData);
    wx.onMenuShareAppMessage (shareData);
    wx.onMenuShareQQ (shareData);
    wx.onMenuShareWeibo (shareData);
});
wx.error(function(res){
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。  
    alert("微信验证失败" + "|||" +res.errMsg);  
}); 
