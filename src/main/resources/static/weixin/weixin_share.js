//微信分享朋友圈
$(function() {
    /***用户点击分享到微信圈后加载接口接口*******/
    var url = window.location.href.split('#')[0];debugger;
    url = url.replace(/&/g, '%26');
    console.log("url:" + url);
    $.ajax({
        url: "/initWX",
        type: "POST",
        async: true,
        cache: false,
        dataType: "json",
        success: function(data) {
            wx.config({
                debug: false,
                appId: 'wx63b4fdfd8d79f516',
                timestamp: data.timeStamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'hideOptionMenu', 'onMenuShareAppMessage']
            });

            wx.ready(function() {
                //wx.hideOptionMenu();/***隐藏分享菜单****/ 
                wx.checkJsApi({
                    jsApiList: ['getLocation', 'onMenuShareTimeline', 'onMenuShareAppMessage'],
                    success: function(res) {
                        alert("百诺优品~~~@@@###");
                    }
                });

               /* wx.onMenuShareAppMessage({
                    title: '我要分享啦~~~',
                    desc: '我要分享啦~~~',
                    link: '/shareToFriend',
                    imgUrl: '<%=basePath%>/resources/qjc/img/start.png',
                    trigger: function(res) {
                        alert('bainuo_用户点击发送给朋友~~~~');
                    },
                    success: function(res) {
                        alert('您已获得抽奖机会，赶紧去赢大奖吧～～');
                        //分享之后增加游戏次数
                        $.ajax({
                            url: "/shareToFriend",
                            type: "POST",
                            async: true,
                            cache: false,
                            dataType: "json",
                            success: function(data) {
								
							}
                        });
                    },
                    cancel: function(res) {
                        //alert('已取消');
                    },
                    fail: function(res) {
                        alert(res.errMsg);
                    }
                });
*/
                // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
              /*  wx.onMenuShareTimeline({
                    title: '刮刮乐',
                    desc: '刮刮乐开始啦',
                    link: '<%=basePath%>/lottery/lottery.action?lottery.id=${lottery.id}',
                    imgUrl: '<%=basePath%>/resources/qjc/img/start.png',
                    trigger: function(res) {
                        //alert('用户点击分享到朋友圈');
                    },
                    success: function(res) {
                        alert('您已获得抽奖机会，赶紧去赢大奖吧～～');
                        //分享之后增加游戏次数
                        $.ajax({
                            url: "<%=basePath%>/lottery/rewardPlayCount.action?openId=${openId}&lotteryId=${lottery.id}&shareType=friendCircle",
                            type: "POST",
                            async: true,
                            cache: false,
                            dataType: "json",
                            success: function(data) {

}
                        });
                    },
                    cancel: function(res) {
                        //alert('已取消');
                    },
                    fail: function(res) {
                        alert(res.errMsg);
                    }
                });

                wx.error(function(res) {
                    alert(res.errMsg);
                });
            });*/
        });
        },
        error: function() {
            alert('ajax request failed!!!!');
            return;
        }
    });
});