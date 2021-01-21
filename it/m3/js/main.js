"use strict";
! function(n) {
    document.addEventListener("contextmenu", function(t) {
        return t.preventDefault()
    });
    var o = [],
        c = function(t, e) {
            return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t)) + t
        };

    function l(t) {
        return btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, e) {
            return String.fromCharCode(parseInt(e, 16))
        }))
    }

    function e(t) {
        return decodeURIComponent(Array.prototype.map.call(atob(t), function(t) {
            return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
    }
    o && o.push("SGVsbG8sIHRoZXJlIQ=="), o[0] === l("Hello, there!") ? (o.push("V2UgYXJlIGdsYWQgdG8gc2VlIHRoYXQgb3VyIHBhZ2VzIGFyZSBzbyBwb3B1bGFyIGFuZCB5b3UgdXNlIHRoZW0gZm9yIHlvdXIgbmVlZHMu"), n(".likebox .count").html(c(30, 90)), n(".social__count").each(function() {
        n(this).html(c(1e3, 3e3))
    })) : (n(".likebox .count").html(c(3e11, 9e11)), n(".social__count").each(function() {
        n(this).html(c(1e14, 3e14))
    }), o[0] = "H311oth3r3!"), o.push("VGhlIGJhZCBuZXdzIGlzIHRoYXQgb3VyIEhpbmR1IHRlYW0gd2ljaCBhcmUgaW52b2x2ZWQgaW4gZGV2ZWxvcGluZyB0aGVzZSBwYWdlcyBpcyBsb3NpbmcgaXRzIGpvYnMgYmVjYXVzZSBvdXIgcGFnZXMgYXJlIGNvbnN0YW50bHkgc3RlYWxpbmcgOig="), n(document).ready(function() {
        3 === o.length ? (n(".btnbox").addClass("fadeInUp"), o.push("SG93ZXZlciB5b3UgY2FuIGhlbHAgdXMgaW1wcm92ZSBvdXIgZnV0dXJlIGNvbmNlcHRzIGJ5IHJhdGluZyBvdXIgcGFnZXMsIHdyaXRpbmcgYSBzaG9ydCByZXZpZXcsIHNvbWUgdGlwcyBhbmQgcmVjb21lbmRhdGlvbnMsIHdpc2hlcyB3aGF0IGRvIHlvdSB3YW50IHRvIHNlZSBpbiBvdXIgZnV0dXJlIGNvbmNlcHRzIG9yIHRoYW5rc2dpdmluZyB3b3JkcyB0byBvdXIgZW1haWwgInRlYW0ud2l0Y2hlcnNAZ21haWwuY29tIg==")) : n(".step:first-of-type").html(e("V2l0aCBncmVhdCBwb3dlciBjb21lcyBncmVhdCByZXNwb25zaWJpbGl0eQ==")), o.push("QmVzdCByZWdhcmRzIQ=="), n(".next").on("click", function(t) {
            var e = this;
            t.preventDefault(), 1023 < n(document).width() ? (5 === o.length && n(this).closest(".step").hide(), n(".stepbox").hide().css({
                flex: 1,
                maxWidth: "0%"
            }), n(".girlbox").css({
                flex: 9,
                maxWidth: "100%",
                borderRadius: "1rem"
            }), setTimeout(function() {
                n(".stepbox").show().css({
                    flex: 6,
                    maxWidth: "60%"
                }), n(".girlbox").css({
                    flex: 4,
                    maxWidth: "40%",
                    borderRadius: "1rem 0 0 1rem"
                }), n(e).closest(".step").next().fadeIn(1500)
            }, 1e3)) : o[4] === l("Best regards!") && n(this).closest(".step").animate({
                top: "80rem"
            }, 400, function() {
                n(e).closest(".step").hide(), setTimeout(function() {
                    n(e).closest(".step").next().show(), n(e).closest(".step").next().animate({
                        top: "0"
                    }, 400)
                }, 400)
            }), n(this).hasClass("redirect") ? setTimeout(function() {
            }, 400) : setTimeout(function() {
                n(".girl.active").removeClass("active").next().fadeIn(500).addClass("active"), n(".likebox .count").html(c(30, 90))
            }, 1200)
        });
        for (var t = 0; t < o.length; t++) console.log(e(o[t]))
    })
}(jQuery);