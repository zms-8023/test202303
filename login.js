$(function(){
	$(".dian").on("click",function(){
		$(".denglu").css("display","block");
        $(".zhuce").css("display","none");
        $(".dian").css("color","rgb(255, 91, 173)");
        $(".sign").css("color","black");
        $(".dian").css("font-weight","bolder");
        $(".sign").css("font-weight","400");
	})
	$(".sign").on("click",function(){
        $(".zhuce").css("display","block");
        $(".denglu").css("display","none");
        $(".sign").css("color","rgb(255, 91, 173)");
        $(".dian").css("color","black");
         $(".sign").css("font-weight","bolder");
        $(".dian").css("font-weight","400");
	})
	$("#registe").on("click",function(){
        $(".zhuce").css("display","block");
        $(".denglu").css("display","none");
	})
	$("#in").on("click",function(){
        $(".denglu").css("display","block");
        $(".zhuce").css("display","none");
	})
        $("#index").on("click",function(){
		$(window).attr('location','index.html');
	}) 
})