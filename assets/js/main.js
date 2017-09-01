$(function() {
    var dpr = $('html').attr('data-dpr');
    /*sales.html 向上滚动效果*/
    auto_flierup();

    function auto_flierup() {
        $('.flier .flier-box').append($('.flier .flier-box a').first().clone());
        var index = $('.flier .flier-box a').length,
            up = null,
            i = 0,
            itemH = $('.flier .flier-box a').height() / dpr;
        up = setInterval(function() {
            i++;
            flierup();
        }, 1500);

        function flierup() {
            if (i == index) {
                $('.flier .flier-box').css('top', 0);
                i = 1;
            }
            $('.flier .flier-box').animate({
                top: -itemH * i + 'px'
            }, 400, 'ease');
        }
    }

    $('.touch').singleTap(function() {

        gotommd($($(this).attr('data-mmd')).offset().top);
        $(this).parent('li').addClass('on').siblings().removeClass('on');
        return false;
    });

    $('#gototop').singleTap(function() {
        gotommd(0);
    });

    /*发现zepto的animate()源码采用css3的方式进行，而scrollTop属性不在css3的动画属性中，所以没有生效。接下来的方法就是自己写一个滚动条上下滚动的方法。初步的代码如下*/
    function gotommd(mdd) {
        var gotop = null,
            wt = $(window).scrollTop(),
            cha = wt - mdd,
            i = 0,
            duration = 300,
            num = 5,
            avg = cha / duration * num,
            st;
        move();

        function move() {
            gotop = setInterval(function() {
                i++;
                st = wt - avg * i;
                $(window).scrollTop(st);
                if (i == duration / num) {
                    clearInterval(gotop);
                }
            }, 1);
        }
    }


});