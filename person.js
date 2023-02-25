/**
 * 
 */
$(function(){
    $(".logined").on("click",function(){
		$(window).attr('location','person.html');
	}) 
    $(".nav1 p").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        var index=$(this).index();
        $(".info .item").eq(index).show().siblings().hide();
    })
    $(".object .add").click(function(){
        $(".object .addobj").show();
    })
    $(".object .addobj .no").click(function(){
        $(".object .addobj").hide();
    })
    var t=0;
    $(".object .del").click(function(){
        t++;
        if(t==1){
            $(".lins button").show();
        }
        else{
            $(".lins button").hide();
            t=0;
        }
    })
    $(".lins .delbtn").click(function(){
        var index=$(".lins .delbtn").index(this);
        $(".lins div").eq(index).remove();
    })
    $(".lins img").mouseenter(function(){
        $(this).addClass("now shadow");
    })
    $(".lins img").mouseleave(function(){
        $(this).removeClass("now shadow");
    })
    var flag=0;//标记点击次数
    $(".peo .cancle").click(function(){
        flag+=1;
        if(flag==1){
            $(this).css('backgroundColor','#ccc');
        $(this).html('关注');
        }
        else{
            $(this).css('backgroundColor','red');
        $(this).html('取消关注');
        flag=0;
        }
    })
    $(".own .btn1").click(function(){
        $(".setbox").show();
        $(".item1").show().siblings().hide();
    })
    $(".own .btn2").click(function(){
        $(".setbox").show();
        $(".item2").show().siblings().hide();
    })
    $(".own .btn3").click(function(){
        $(".setbox").show();
        $(".item3").show().siblings().hide();
    })
    $(".setbox .bt").click(function(){
        $(".setbox").hide();
    })
})