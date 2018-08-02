$(function () {
	var swiper = new Swiper('.swiper-container', {
		  autoplay: 5000,//可选选项，自动滑动
		  autoplay : 3000,
		  speed:1000,
		  prevButton:'.swiper-button-prev',
		  nextButton:'.swiper-button-next',
	    });
})


/*预览*/
function showContentPage(id){
	var openid = $("#openId").val();
	window.location.href='/share?page_id='+id+'&current_uid='+openid;
}
