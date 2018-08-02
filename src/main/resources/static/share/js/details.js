$(function () {
})
var bf = true;
function praise(){
	if(bf){
		$("#praise_count").text(parseInt($("#praise_count").text())+1);
		bf = false;
	}else{
		$("#praise_count").text(parseInt($("#praise_count").text())-1);
		bf = true;
	}
	var page_id = $("#pageId").val();
	var praise_count = $("#praise_count").text();
	$.ajax({
		type:"POST",
		url:"/modifyContentPageCount",
		data:{page_id:page_id,praise_count:praise_count},
		dataType:"json",
		cache:false,
		success:function(data){
		}
	});
}
$(window).unload(function(){ 
    alert("获取到了页面要关闭的事件了！"); 
}); 

function callback() {
	//url,data
//	ajaxGet("/shareToFriendEnd","");
	$.ajax({
		type:"POST",
		url:"/shareToFriendEnd",
		data:{pageId:$("#pageId").val(),openId:$("#openId").val(),parentOpenId:$("#parentOpenId").val()},
		dataType:"json",
		cache:false,
		success:function(data){
		}
	});
}