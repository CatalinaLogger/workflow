$(function () {
	//表格分页
    $('#order').DataTable({
    	"scrollX"	  : true,
  		'paging'      : true,
  	    'lengthChange': true,
  	    'searching'   : true,
  	    'ordering'    : true,
  	    'info'        : true,
  	    'autoWidth'   : false,
  	  	"pagingType"  : "full_numbers",
  	  	"pageLength"  : 10,
  	  	language: {
            lengthMenu: '每页 <select class="form-control input-xsmall">' + '<option value="10">10</option>' + '<option value="30">30</option>' + '<option value="50">50</option>' + '<option value="100">100</option>' + '<option value="200">200</option>' + '</select> 条记录',//左上角的分页大小显示。
              processing: "载入中",//处理页面数据的时候的显示
              search: "搜索",
              paginate: {//分页的样式文本内容。
                  previous: "上一页",
  	            next: "下一页",
  	            first: "第一页",
  	            last: "最后一页"
              },
              zeroRecords: "没有内容",//table tbody内容为空时，tbody的内容。
              //下面三者构成了总体的左下角的内容。
              info: "总共_PAGES_ 页，显示第_START_ 条到第 _END_ 条，筛选之后得到 _TOTAL_ 条，初始_MAX_ 条 ",//左下角的信息显示，大写的词为关键字。
              infoEmpty: "0条记录",//筛选为空时左下角的显示。
              infoFiltered: ""//筛选之后的左下角筛选提示(另一个是分页信息显示，在上面的info中已经设置，所以可以不显示)，
          }
    });
    //提示框
    $("[data-toggle='tooltip']").tooltip();
  })
  
  //加载模态框的内容
  function reloadMenuModel(title,id,type,content,remark){
	$("#couponModal #couponmodelHead").text(title);
	$("#couponModal input[name='id']").val(id);
	$("#couponModal input[name='type']").val(type);
  	$("#couponModal input[name='content']").val(content);
  	$("#couponModal input[name='remark']").val(remark);
  }
  function reloadActionBtn(actionUrl,btnText){
	  $("#couponModal input[name='actionurl']").val(actionUrl);
	  $("#submitBtn").text(btnText);
  }