  //编辑菜单
  function editContentPage(id){
	window.location.href='/contentpage/editcontentpage?id='+id;
  }


//删除菜单
function delContentPage(id){
	if(confirm("你确定要删除吗？")){
		$.ajax({
			type:"POST",
			url:"/contentpage/delcontentpage",
			data:{id:id},
			dataType:"json",
			cache:false,
			success:function(data){
				if(data.status == 'success'){
					alert("删除成功!");
					if(id!=null && id!=""){
	    				window.location.href="/contentpage/contentpageListIndex";
					}else{
	    				window.location.href=window.location.href;
					}
					//刷新
				}else{
					alert(data.msg);
				}
			}
		});
	}
}
function startFormPage(processId,processCategory){
	window.location.href="/process/startFormPage?processId="+processId+"&processCategory="+processCategory;
}
/*预览*/
function showContentPage(id){
	window.location.href='/contentpage/showContentPage?id='+id;
}
//createtime, class_type
function showContentPage(processId) {
    var class_type_str = processId;
    var index = layer.open({
        type: 2,
        title: '流程图页面',
        shadeClose: true,
        shade: false,
        maxmin:false , //开启最大化最小化按钮
        area: ['1400px', '750px'],
        content: "/process/imageDetailPage?processId=" + processId 
    });
    layer.full(index);
}



function showActivityPage(taskId) {
    var index = layer.open({
        type: 2,
        title: '流程图页面',
        shadeClose: true,
        shade: false,
        maxmin:false , //开启最大化最小化按钮
        area: ['1400px', '750px'],
        content: "/process/showActivityimageDetailPage?taskId=" + taskId 
    });
    layer.full(index);
}





function taskHandler(taskId){
	window.location.href="/task/taskHandler?taskId="+taskId;
}
