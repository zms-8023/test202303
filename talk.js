/**
 * 
 */
$(function(){
  $(".send").click(function(){
	console.log(111);
    var sText = $(".text").val();
var imgs='<%=request.contextPath%>img/01.jpg';
    if (sText == ''){
      alert('请输入内容');
      return;
    }
    $(".myul").append('<div><a>'+sText+'</a><img src="'+imgs+'"></div>');
    $(".text").val();
  })
  $(".bottom .input").click(function(){
	$(this).css("outline","none");
})
$(".imgs a").mouseenter(function(){
        var index=$(this).index();
		console.log(index);
        $(".tipname .name").eq(index).fadeIn();
    })
    $(".imgs a").mouseleave(function(){
        $(".tipname .name").fadeOut();
    })
    var mtop=600;
        $(window).scroll(function(){
            if($(document).scrollTop()>=mtop){
                $(".goBack").fadeIn();
            }
            else{
                $(".goBack").fadeOut();
            }
        })
        $(".goBack").click(function(){
            $("body,html").stop().animate({
                scrollTop:0
            })
        })
})