$(function () {
    //1.全选 全不选功能模块
    // 把全选按钮(checkall)的状态赋值给 三个小的按钮(j-checkbox)
    //事件可以使用change
    $(".logined").on("click",function(){
		$(window).attr('location','person.html');
	}) 
    $('.checkall').change(function () {
        // console.log($(this).prop('checked'));
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            //让所有的商品添加 check-cart-item 类名
            $('.cart-item').addClass('check-cart-item');
            getSum();
        } else {
            // check-cart-item 移除
            $('.cart-item').removeClass('check-cart-item');
            getSum();
        }
    });
    // 2.如果小复选框全被被选中，就应该把全选按钮选上，否则全选按钮不选
    $('.j-checkbox').change(function () {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        if ($(this).prop('checked')) {
            //让当前的商品添加 check-cart-item 类名
            $(this).parents('.cart-item').addClass('check-cart-item');
            getSum();

        } else {
            // check-cart-item 移除
            $(this).parents('.cart-item').removeClass('check-cart-item');
            getSum();
        }
    })
    // 3.增减商品数量模块，首先，声明一个变量，当我们点击+，就让这个值++，然后赋值文本框
    $('.increment').click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);
        // 4.修改商品小计模块 根据文本框的值 乘以商品价格p 就是小计
        var p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1);
        $(this).parent().parent().siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        //toFixed(2)保留2位小数
console.log(n);
        getSum();
    })
    $('.decrement').click(function () {
        // 得到当前兄弟文本框的值
        var n = $(this).siblings('.itxt').val();
        if (n == 0) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
        var p = $(this).parent().parent().siblings('.p-price').html();
        p = p.substr(1);
        $(this).parent().parent().siblings('.p-sum').html('￥' + (p * n).toFixed(2));
        getSum();
    })
    // 5.用户修改文本框的值 计算 小计模块
    $('.itxt').change(function () {
        //先得到文本框里的值 乘以 当前商品的单价
        var n = $(this).val();
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2))
        getSum();
    })
    // 5.总计和总额模块
    getSum();
    function getSum() {
        var count = 0; // 计算总件数 
        var money = 0; // 计算总价钱
        //遍历所有带有checked的选择框 并为他计算总件数
        $('.j-checkbox:checked').each(function(index, ele) {
            count += parseInt($(ele).parents('.p-checkbox').siblings('.p-num').find('.itxt').val())
        })
        $(".amount-sum").text("已选商品件数："+count);
        //遍历所有带有checked的选择框 并为他计算总价钱
        $('.j-checkbox:checked').each(function(index, ele) {
            money += parseFloat($(ele).parents('.p-checkbox').siblings('.p-sum').text().substr(1))
        })
        $(".price-sum").text("总价：￥" + money.toFixed(2));
 
    }
    // // 6.删除商品模块
    // （1）商品后面的删除按钮
    $('.p-action a').click(function () {
        // 删除的是当前的商品
        $(this).parents('.cart-item').remove();
        getSum();
    });
    // （2）删除选中的商品
    $('.remove-selected').click(function () {
        //删除小的复选框选中的商品
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    });
    // （3）清空购物车 删除全部商品
    $('.clean-all').click(function () {
        $('.cart-item').remove();
        getSum();
    })
    // 7.点击结算并跳转页面
    $('.btn-area').click(function(){
        $(".topay").show();
	})
	$(".topay .paybtn .del").click(function(){
	$(".topay").hide();
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