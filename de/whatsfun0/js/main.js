$(document).ready(function() {
    function scroll() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1700);
    }
    setTimeout(scroll, 2500);
    var $btnNext = $('.step-btn');
    var currentStep = 0;
    var $step = $('.step-item');
    var totalStep = $step.length;
    $btnNext.not('.submit-btn').on('click', function() {
        nextStep();
        if (currentStep === 1) {
            setTimeout(nextStep, 3000);
        }
    });

    function nextStep() {
        currentStep++;
        $step.removeClass('visible').eq(currentStep).addClass('visible animated-step');
        scroll();
    }
    $('.checkbox-item').on('click', function() {
        $(this).toggleClass('checked tr-selected');
    });
});