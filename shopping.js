$(function(){
    $(".logined").on("click",function(){
		$(window).attr('location','person.html');
	}) 
	$(".buynow").click(function(){
		$(".pay").show();
	})
	$(".pay .cancle").click(function(){
		$(".pay").hide();
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
var num=1;
	$(".counter .sub").click(function(){
		if(num>0){
			num--;
		}
		$("#countnum").text(num);
	})
	$(".counter .add").click(function(){
		num++;
		$("#countnum").text(num);
	})
})