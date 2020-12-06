$(document).ready(function() {
    setTimeout(function() {
        $("html, body").animate({ scrollTop: $(document).height() }, 1700);
    }, 1500);
    $('.btn, .btn_prev').click(function(e) {
        var $this = $(this),
            $steps = $(this).closest('.step');
        $steps.hide();
        if ($this.hasClass('btn')) {
            $steps.next('.step').fadeIn();
        } else {
            $steps.prev('.step').fadeIn();
        }
        e.preventDefault();
    });
});
