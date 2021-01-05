$(document).ready(function() {
    timerCountdown.init(350);

    function clear_delay(timeoutID_here) {
        window.clearTimeout(timeoutID_here);
    }
    /* Step 1 */
    function runLoading_1(time_delay) {
        timeoutID1 = window.setTimeout(loading_1, time_delay);
    }

    function loading_1() {
        $('.li_thank, .run_loading_2').fadeIn();
        $('.main_review').hide();
    }
    /* Step 2 */
    function runLoading_2(time_delay) {
        timeoutID2 = window.setTimeout(loading_2, time_delay);
    }

    function loading_2() {
        $('.run_loading_2').hide();
        $('.run_loading_3, .li_load_1').fadeIn();
    }
    /* Step 3 */
    function runLoading_3(time_delay) {
        timeoutID3 = window.setTimeout(loading_3, time_delay);
    }

    function loading_3() {
        $('.run_loading_3').hide();
        $('.run_loading_4, .li_load_2').fadeIn();
    }
    /* Step 4 */
    function runLoading_4(time_delay) {
        timeoutID3 = window.setTimeout(loading_4, time_delay);
    }

    function loading_4() {
        $('.run_loading_4, .loading').hide();
        $('.run_loading_5, .accept_terms')
            .fadeIn();
    }

    $("a.step2_next").click(function() {
        $('.step1.question_show').hide();
        $('.step2.question_show').fadeIn(800);
        return false;
    });
    $("a.step3_next").click(function() {
        $('.step2.question_show').hide();
        $('.step3.question_show').fadeIn(800);
        return false;
    });
    $("a.step4_next").click(function() {
        $(this).parent().hide().next().fadeIn();
        $('.step4 .loading').show();
        window['optimizely'] = window['optimizely'] || [];
        window.optimizely.push(["trackEvent", "TP18_3Q"]);
        _m3k.push(["stop"], ["page", "529dfa32e83258413e000109"], ["alignment", "center"], ["start"]);
        runLoading_1('1000');
        runLoading_2('3800');
        runLoading_3('5900');
        runLoading_4('8000');
        return false;
    });
});

var timerCountdown = function() {
    var leftTime = 10; /*countdown seconds */
    var countingContinue = 1;
    var noLeftTimeMessage = 'few time';

    function countdown() {
        if (leftTime < 2) {
            countingContinue = 0;
        }
        leftTime = leftTime - 1;
    }

    function addZeroLeading(n) {
        if (n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }

    function outputFormat() {
        var hours, minutes, seconds;
        seconds = leftTime % 60;
        minutes = Math.floor(leftTime / 60) % 60;
        hours = Math.floor(leftTime / 3600);
        seconds = addZeroLeading(seconds);
        minutes = addZeroLeading(minutes);
        hours = addZeroLeading(hours);
        return minutes + ' Minuten und ' + seconds + ' Sekunden';
    }

    function displayLeftTime() {
        $("#countdown_timer").html('<span>' + outputFormat() + '</span>');
    }

    function noLeftTimeProcess() {
        $("#countdown_timer").html(noLeftTimeMessage);
    }
    return {
        count: function() {
            countdown();
            displayLeftTime();
        },
        timer: function() {
            timerCountdown.count();
            if (countingContinue) {
                setTimeout("timerCountdown.timer();", 1000);
            } else {
                noLeftTimeProcess();
            }
        },
        init: function(n) {
            leftTime = n;
            timerCountdown.timer();
        }
    };
}();