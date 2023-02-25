/**
 * 
 */
$(function(){
    $(".logined").on("click",function(){
		$(window).attr('location','person.html');
	}) 
    // 1.商品右下角删除模块
    $('.delete-one').click(function(){
        $(this).parents('.card').remove();
    });
    // 2.删除当天模块 全部删除后显示去首页模块
    $('.date-select').click(function(){
        $(this).parents('.item').remove();
        if($('.item').length<=0){
            $('.footer').remove();
            $('.background-1').show();
        }
        
    });
    // 3.全部删除模块 全部删除后显示去首页模块
    $('.delete a').click(function(){
        var res=window.confirm("您确定要全部删除吗？");
        if(res==true){
            $('.items').remove();
            $('.footer').remove();
            $('.background-1').show();
        }
    })
    // 4.返回首页模块
})