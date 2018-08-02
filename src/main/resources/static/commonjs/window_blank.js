/**
 * Created by Administrator on 2017/9/22.
 */
function wondowBlack(url) {
    //url="http://101.200.163.83/seeyon/collaboration/collaboration.do?method=summary&openFrom=listPending&affairId=-6562892639899595654"
	var w = window.screen.width-15;
    var h = window.screen.height-105;
    //如果存在该cookie的话直接登录
    var winObj = window.open(url,'_blank','width='+w+',height='+h+',top=0px,left=0px,right=0px;bottom=0px');
    console.info(winObj);
    var loop = setInterval(function() {
        if(winObj.closed) {
            clearInterval(loop);
            window.location.reload();
        }
    }, 1000);
}

function wondowBlank(url) {
    //url="http://101.200.163.83/seeyon/collaboration/collaboration.do?method=summary&openFrom=listPending&affairId=-6562892639899595654"
    var w = window.screen.width-15;
    var h = window.screen.height-105;
    //如果存在该cookie的话直接登录
    window.open(url,'_blank','width='+w+',height='+h+',top=0px,left=0px,right=0px;bottom=0px');
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        { 
            return true;
        }
    }
    return false;
}
