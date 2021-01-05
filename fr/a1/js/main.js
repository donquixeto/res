$(document).ready(function() {
    function scroll() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
    }
    setTimeout(scroll, 2500);
    $('.btn').not('.btn-start').click(function() {
        $('.step:visible').hide().next().fadeIn();
        scroll();
        if ($(this).hasClass('btn-loader')) {
            setTimeout(function() {
                $('.loader').fadeIn();
            }, 100);
            setTimeout(function() {
                $('.step:visible').hide().next().fadeIn();
            }, 2000);
        }
    });
    $('.option-item').click(function() {
        $(this).toggleClass('checked');
    });
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $('.bg').addClass('bg' + getRandomInt(1, 3));
});