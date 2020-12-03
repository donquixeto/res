$(document).ready(function() {
    function e(e, t) {
        return Math.round(e - .5 + Math.random() * (t - e + 1))
    }
    var t = 72e4,
        n = setInterval(function() {
            t -= 1e3;
            var e = " minuti e ",
                r = Math.floor(t / 6e4),
                i = Math.floor((t - 60 * r * 1e3) / 1e3);
            t <= 0 ? (clearInterval(n), $(".timer").html(r + "  00")) : i <= 9 ? $(".timer").html(r + e + "0" + i + " Sekunden...") : $(".timer").html(r + e + i + " secondi...")
        }, 1e3);

    function r(e) {
        setTimeout(function() {
            $("html, body").animate({
                scrollTop: $(document).height()
            }, e)
        }, 2e3)
    }

    function i(e, t, n) {
        var r = 0,
            i = e.children().length,
            o = setInterval(function() {
                e.children().eq(r).fadeIn(), ++r > i && (n && n(), clearInterval(o))
            }, t)
    }

    function o() {
        $(".step").hide(), $(".final_step").fadeIn(), i($(".final_step"), 200, r)
    }
    var a, s, u = $(".q_block").length,
        l = $(".q").length,
        c = 0;
    r(), a = 1, s = $(".slide").length, setInterval(function() {
        $(".slide").removeClass("active").eq(a).addClass("active"), ++a == s && (a = 0)
    }, 2e3), $(".members_online").text(e(10, 100)), $(".members").text(e(50, 1e3)), $(".ok_button").click(function() {
        $(this).closest(".step").hide().next(".step").fadeIn(), r()
    }), $(".yes_btn, .no_btn").click(function() {
        $(this).closest(".q_block").hide().next(".q_block").fadeIn(), ++c == l && $(".question_wrap .text").hide(), c == u && ($(".question_wrap").hide(), $(".loading_block").fadeIn(), i($(".loading_block"), 1e3, o)), r()
    }), $(".choice_block li").click(function() {
        $(this).toggleClass("active")
    })
});