// 编辑菜单
function returnBack() {
    window.location.href = "/contentpage/contentpageListIndex";
}
// 编辑菜单
function savecontenpage() {
    var title = $("input[name='title']").val();
    var pic_url = $("input[name='pics']").val();

    $.ajax({
        type : "POST",
        url : "/process/upload",
        data : {
            title : title,
            pics : pic_url
        },
        dataType : "json",
        cache : false,
        success : function(data) {
            if (data.status == 'success') {
                alert("保存成功!");
                if (id != null && id != "") {
                    //saveSussess("/contentpage/contentpagelist");
                    window.location.href = "/contentpage/contentpageListIndex";
                } else {
                    window.location.href = window.location.href;
                }
                // 刷新
            } else {
                alert(data.msg);
            }
        }
    });
}

function saveSussess(url) {
    var jsonResult;
    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        async: false,
        success: function (result) {
            jsonResult = result;
        }
    })
    return jsonResult;
}
$("input[type='file']").each(function(index){
    if (typeof (FileReader) === 'undefined') {
        result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
        $(this).setAttribute('disabled', 'disabled');
    } else {
        $(this).bind('change', readFile);
    }
});
function readFile() {
    var file = this.files[0];
    var hidImg = $(this).data("hide-image");
    var showImg = $(this).data("show-image");
    // 判断是否是图片类型
//    if (!/image\/\w+/.test(file.type)) {
//        alert("只能选择图片");
//        return false;
//    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
        base64Code = this.result;
//		$("input[name='"+hidImg+"']").val(this.result);
        $("#"+hidImg).val( this.result);
    }
}

//判断是否为数字
function isDigit(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}