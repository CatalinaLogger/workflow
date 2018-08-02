/**
 * Created by Administrator on 2017/8/23.
 */
function ajaxPost(url,data) {
    var jsonResult;
    $.ajax({
        url: url,
        data: data,
        type: "POST",
        dataType: "json",
        async: false,
        success: function (result) {
            jsonResult = result;
        }
    })
    return jsonResult;
}
function ajaxGet(url,data) {
    var result;
    $.ajax({
        url: url+"?time="+new Date(),
        data: data,
        type: "GET",
        dataType: 'json',
        async: false,
        success: function (data) {
            result = data;
        }
        })
    return result;
}

