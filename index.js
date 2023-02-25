/**
 * 
 */
$(function(){
    $(".logined").on("click",function(){
		$(window).attr('location','person.html');
	}) 
    $(".nav li ").click(function(){
        $(".nav li a").addClass("link-info").removeClass("active");
        $(this).addClass("active").removeClass("link-info");
    })
	/** $(".hou").click(function(){
           $("#tuijian").hide();
       		$("#houtai").show();
console.log(2222222);
        })*/
        
    $(".shows .obj").mouseover(function(){
        $(this).addClass("shadow-lg");
    })
    $(".shows .obj").mouseout(function(){
        $(this).removeClass("shadow-lg");
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
        // 点击跳转页面
        /** $(".login").click(function(){
             window.location.href="login.jsp";
            console.log(11);
            // $(".info .item").hide();
            // $(".info .own").show();
        })*/
		$(".person").click(function(){
             window.location.href="person.jsp";
        })
		$(".order").click(function(){
			//$("#form2").submit();
             window.location.href="myorder.jsp";
        })
	
})