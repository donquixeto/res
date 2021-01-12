$(document).ready(function() {
    function scrollPage(speed) {
        setTimeout(function() {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, speed);
        }, 2000);
    }

    function changeSlider() {
        var counterSlide = 1;
        var numberSlides = $(".slide").length;
        var sliderInterval = setInterval(function() {
            $(".slide").removeClass("active").eq(counterSlide).addClass("active");
            counterSlide++;
            if (counterSlide == numberSlides) {
                counterSlide = 0;
            }
        }, 2000);
    }

    var questionCount = $(".q_block").length;
    var qCount = $(".q").length;
    var currentQ = 0;
    scrollPage();
    changeSlider();

    $(".yes_btn, .no_btn").click(function() {
        $(this).closest(".q_block").hide().next(".q_block").fadeIn();
        currentQ++;
        if (currentQ == qCount) {
            $(".question_wrap .text").hide();
        }
        if (currentQ == questionCount) {
            $(".question_wrap").hide();
        }
        scrollPage();
    });

});