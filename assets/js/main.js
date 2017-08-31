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
                top: -itemH * i + 1 + 'px'
            }, 400, 'ease');
        }
    }

});