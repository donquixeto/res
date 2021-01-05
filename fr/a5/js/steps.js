$(document).ready(function() {
    setTimeout(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1700);
    }, 1000);
    $('.show_hide').click(function() {
        $(this).parents('.toggleDiv').hide();
        $(this).parents('.toggleDiv').next('.toggleDiv').fadeIn();
        $(".numb_step2").addClass("active");
        if ($("#q3").is(":visible")) {
            $(".numb_step3").addClass("active");
        }
    });
});

function clear_delay(timeoutID_here) {
    window.clearTimeout(timeoutID_here);
} /* Run 1 */
function run_loading_run_1(time_delay) {
    $('.main_review').fadeIn();
    $('.loading').css("display", "block");
    $(".numb_step4").addClass("active");
    timeoutID1 = window.setTimeout(run_loading_1, time_delay);
}

function run_loading_1() {
    $('.run_loading_2').fadeIn();
    $('.main_review').hide();
} /* Run 2 */
function run_loading_run_2(time_delay) {
    timeoutID2 = window.setTimeout(run_loading_2, time_delay);
}

function run_loading_2() {
    $('.run_loading_2').hide();
    $('.run_loading_3').fadeIn();
} /* Run 3 */
function run_loading_run_3(time_delay) {
    timeoutID3 = window.setTimeout(run_loading_3, time_delay);
}

function run_loading_3() {
    $('.run_loading_3').hide();
    $('.run_loading_4').fadeIn();
} /* Run 4 */
function run_loading_run_4(time_delay) {
    timeoutID3 = window.setTimeout(run_loading_4, time_delay);
}

function run_loading_4() {
    $('.loading,.run_loading_4').hide();
    $('.show_end').fadeIn();
    $("#steps, .attention").animate({
        "left": "-=100px"
    }, "1000");
    $(".image_block, #container").animate({
        "padding": "2px"
    }, "1000");
}
$(function() {
    $('.run_loading').click(function(e) {
        $('.loading').show();
        run_loading_run_1('1000');
        run_loading_run_2('2000');
        run_loading_run_3('3000');
        run_loading_run_4('4000');
        setTimeout(function() {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1700);
        }, 4100);
    });
});