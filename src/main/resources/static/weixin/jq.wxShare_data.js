var wxdata = {
	wx_account : new Array(4),
	wx_share : new Array(4),
	
	get_wxshare_data : function(ctx){
		var url =  "/wx_share/getWxShareData";
//		alert("ajax请求getWxShareData开始");
		$.ajax({
			type : "GET",
			url : url,
			dataType : "json",
			data:{pageId:$("#pageId").val(),openId:$("#openId").val(),picUrl:$("#picUrl").val()},
			cache : false,
			async : false,
			success : function(msg) {
//				alert("ajax请求getWxShareData返回"+msg);
//				alert(msg.errcode +"|" + msg.shareimg + "|" + msg.shareurl);
				if(msg.errcode == 0){
					wxdata.wx_account[0] = msg.wxuser;  // appid
					wxdata.wx_account[1] = msg.timestamp;   // timestamp
					wxdata.wx_account[2] = msg.noncestr; // noncestr
					wxdata.wx_account[3] = msg.signature;  // signature

					wxdata.wx_share[0] = msg.shareimg;  // share_img 分享缩略图
					wxdata.wx_share[1] = msg.shareurl;// share_link  分享页面地址
					wxdata.wx_share[2] = $("#descs").val();  // share_img 描述
					wxdata.wx_share[3] = $("#title").val();// share_link  标题
//					var description = $("meta[name='description']").attr("content");
//					if ($.trim(description) != "") {
//						wxdata.wx_share[2] = $.trim(description); // share_desc
//					}
//					var title1 = document.title;
//					if ($.trim(title1) != "") {
//						wxdata.wx_share[3] = title1;// share_title
//					}
				}
			},
			error : function(msg){
				alert(msg);
			}
		});
	}
}

//var host = "http://" + window.location.host;
//var host = "http://localhost:8880";
wxdata.get_wxshare_data();

