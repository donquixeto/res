$(document).ready(function() {
    $('.popup_close').click(function() {
        $(this).parents('#popup-wrapper').fadeOut();
        $('.radar_scanner').fadeIn();
        setTimeout(function() {
            $('.first_page').hide();
            $('.second_page').fadeIn();
            $('body').addClass('bg2');
        }, 2000);
    });
    $('.btn').click(function() {
        $(this).parents('.step').hide().next('.step').fadeIn();
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1000);
    });
    $('.option').click(function() {
        $(this).toggleClass('checked tr_selected');
    });
});