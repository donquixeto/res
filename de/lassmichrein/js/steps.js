function scrollPage(speed) {
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, speed);
    }, 3000);
}
$(document).ready(function() {
    $('.btn, .cancel').click(function() {
        var qLength = $('.steps .step').length;
        var curIndex = $(this).closest('.step').index() + 1;
        if (curIndex < qLength) {
            $(this).closest('.step').hide().next().fadeIn();
            scrollPage(1000);
        }
    });
});
$(window).load(function() {
    scrollPage(1000);
});