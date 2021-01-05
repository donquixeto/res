function clear_delay(timeoutID_here) {
    window.clearTimeout(timeoutID_here);
}
<!-- Run 1 -->
function run_loading_run_1(time_delay) {
    timeoutID1 = window.setTimeout(run_loading_1, time_delay);
}

function run_loading_1() {
    $('.thank_for_close, .run_loading_2').fadeIn();
    $('.main_review').hide();
}
<!-- Run 2 -->
function run_loading_run_2(time_delay) {
    timeoutID2 = window.setTimeout(run_loading_2, time_delay);
}

function run_loading_2() {
    $('.thank_for_close, .run_loading_2').hide();
    $('.run_loading_3, .li_run_loading_1, .li_run_loading_2').fadeIn();
}
<!-- Run 3 -->
function run_loading_run_3(time_delay) {
    timeoutID3 = window.setTimeout(run_loading_3, time_delay);
}

function run_loading_3() {
    $('.run_loading_3').hide();
    $('.run_loading_4, .li_run_loading_3').fadeIn();
}
<!-- Run 4 -->
function run_loading_run_4(time_delay) {
    timeoutID3 = window.setTimeout(run_loading_4, time_delay);
}

function run_loading_4() {
    $('.run_loading_4, .loading').hide();
    $('.li_run_loading_4, li_run_loading_5, .run_loading_5, .show_end').fadeIn();
}
$(function() {
    $(document).on('click', '.next', function(e) {
        e.preventDefault();
        $(this).parent().hide().next().fadeIn();
    });
    $(document).on('click', '.run_loading', function(e) {
        e.preventDefault();
        $(this).parent().hide().next().fadeIn();
        $('.step4 .loading').show();
        run_loading_run_1('1000');
        run_loading_run_2('3000');
        run_loading_run_3('5000');
        run_loading_run_4('7000');
        window['optimizely'] = window['optimizely'] || [];
        window.optimizely.push(["trackEvent", "TP18_3Q"]);
        _m3k.push(["stop"], ["page", "529dfa32e83258413e000109"], ["alignment", "center"], ["start"]);
    });
});

<!-- Avoid console errors in browsers that lack a console -->
(function() {
    var method;
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());