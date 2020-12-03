! function(a) {
    function j(a, b, c) {
        var d = a[0],
            g = /er/.test(c) ? _indeterminate : /bl/.test(c) ? h : f,
            i = c == _update ? {
                checked: d[f],
                disabled: d[h],
                indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate)
            } : d[g];
        if (/^(ch|di|in)/.test(c) && !i) k(a, g);
        else if (/^(un|en|de)/.test(c) && i) l(a, g);
        else if (c == _update)
            for (var j in i) i[j] ? k(a, j, !0) : l(a, j, !0);
        else b && "toggle" != c || (b || a[_callback]("ifClicked"), i ? d[_type] !== e && l(a, g) : k(a, g))
    }

    function k(d, i, j) {
        var k = d[0],
            m = d.parent(),
            q = i == f,
            r = i == _indeterminate,
            s = i == h,
            t = r ? _determinate : q ? g : "enabled",
            u = n(d, t + o(k[_type])),
            v = n(d, i + o(k[_type]));
        if (k[i] !== !0) {
            if (!j && i == f && k[_type] == e && k.name) {
                var w = d.closest("form"),
                    x = 'input[name="' + k.name + '"]';
                x = w.length ? w.find(x) : a(x), x.each(function() {
                    this !== k && a(this).data(b) && l(a(this), i)
                })
            }
            r ? (k[i] = !0, k[f] && l(d, f, "force")) : (j || (k[i] = !0), q && k[_indeterminate] && l(d, _indeterminate, !1)), p(d, q, i, j)
        }
        k[h] && n(d, _cursor, !0) && m.find("." + c).css(_cursor, "default"), m[_add](v || n(d, i) || ""), m.attr("role") && !r && m.attr("aria-" + (s ? h : f), "true"), m[_remove](u || n(d, t) || "")
    }

    function l(a, b, d) {
        var e = a[0],
            i = a.parent(),
            j = b == f,
            k = b == _indeterminate,
            l = b == h,
            m = k ? _determinate : j ? g : "enabled",
            q = n(a, m + o(e[_type])),
            r = n(a, b + o(e[_type]));
        e[b] !== !1 && (!k && d && "force" != d || (e[b] = !1), p(a, j, m, d)), !e[h] && n(a, _cursor, !0) && i.find("." + c).css(_cursor, "pointer"), i[_remove](r || n(a, b) || ""), i.attr("role") && !k && i.attr("aria-" + (l ? h : f), "false"), i[_add](q || n(a, m) || "")
    }

    function m(c, d) {
        c.data(b) && (c.parent().html(c.attr("style", c.data(b).s || "")), d && c[_callback](d), c.off(".i").unwrap(), a(_label + '[for="' + c[0].id + '"]').add(c.closest(_label)).off(".i"))
    }

    function n(a, c, d) {
        if (a.data(b)) return a.data(b).o[c + (d ? "" : "Class")]
    }

    function o(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function p(a, b, c, d) {
        d || (b && a[_callback]("ifToggled"), a[_callback]("ifChanged")[_callback]("if" + o(c)))
    }
    var b = "iCheck",
        c = b + "-helper",
        d = "checkbox",
        e = "radio",
        f = "checked",
        g = "un" + f,
        h = "disabled";
    _determinate = "determinate", _indeterminate = "in" + _determinate, _update = "update", _type = "type", _click = "click", _touch = "touchbegin.i touchend.i", _add = "addClass", _remove = "removeClass", _callback = "trigger", _label = "label", _cursor = "cursor", _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent), a.fn[b] = function(g, i) {
        var n = 'input[type="' + d + '"], input[type="' + e + '"]',
            o = a(),
            p = function(b) {
                b.each(function() {
                    var b = a(this);
                    o = b.is(n) ? o.add(b) : o.add(b.find(n))
                })
            };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(g)) return g = g.toLowerCase(), p(this), o.each(function() {
            var b = a(this);
            "destroy" == g ? m(b, "ifDestroyed") : j(b, !0, g), a.isFunction(i) && i()
        });
        if ("object" != typeof g && g) return this;
        var q = a.extend({
                checkedClass: f,
                disabledClass: h,
                indeterminateClass: _indeterminate,
                labelHover: !0
            }, g),
            r = q.handle,
            s = q.hoverClass || "hover",
            t = q.focusClass || "focus",
            u = q.activeClass || "active",
            v = !!q.labelHover,
            w = q.labelHoverClass || "hover",
            x = 0 | ("" + q.increaseArea).replace("%", "");
        return r != d && r != e || (n = 'input[type="' + r + '"]'), x < -50 && (x = -50), p(this), o.each(function() {
            var g = a(this);
            m(g);
            var E, i = this,
                n = i.id,
                o = -x + "%",
                p = 100 + 2 * x + "%",
                r = {
                    position: "absolute",
                    top: o,
                    left: o,
                    display: "block",
                    width: p,
                    height: p,
                    margin: 0,
                    padding: 0,
                    background: "#fff",
                    border: 0,
                    opacity: 0
                },
                y = _mobile ? {
                    position: "absolute",
                    visibility: "hidden"
                } : x ? r : {
                    position: "absolute",
                    opacity: 0
                },
                z = i[_type] == d ? q.checkboxClass || "i" + d : q.radioClass || "i" + e,
                A = a(_label + '[for="' + n + '"]').add(g.closest(_label)),
                B = !!q.aria,
                C = b + "-" + Math.random().toString(36).substr(2, 6),
                D = '<div class="' + z + '" ' + (B ? 'role="' + i[_type] + '" ' : "");
            B && A.each(function() {
                D += 'aria-labelledby="', this.id ? D += this.id : (this.id = C, D += C), D += '"'
            }), D = g.wrap(D + "/>")[_callback]("ifCreated").parent().append(q.insert), E = a('<ins class="' + c + '"/>').css(r).appendTo(D), g.data(b, {
                o: q,
                s: g.attr("style")
            }).css(y), !!q.inheritClass && D[_add](i.className || ""), !!q.inheritID && n && D.attr("id", b + "-" + n), "static" == D.css("position") && D.css("position", "relative"), j(g, !0, _update), A.length && A.on(_click + ".i mouseover.i mouseout.i " + _touch, function(b) {
                var c = b[_type],
                    d = a(this);
                if (!i[h]) {
                    if (c == _click) {
                        if (a(b.target).is("a")) return;
                        j(g, !1, !0)
                    } else v && (/ut|nd/.test(c) ? (D[_remove](s), d[_remove](w)) : (D[_add](s), d[_add](w)));
                    if (!_mobile) return !1;
                    b.stopPropagation()
                }
            }), g.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(a) {
                var b = a[_type],
                    c = a.keyCode;
                return b != _click && ("keydown" == b && 32 == c ? (i[_type] == e && i[f] || (i[f] ? l(g, f) : k(g, f)), !1) : void("keyup" == b && i[_type] == e ? !i[f] && k(g, f) : /us|ur/.test(b) && D["blur" == b ? _remove : _add](t)))
            }), E.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(a) {
                var b = a[_type],
                    c = /wn|up/.test(b) ? u : s;
                if (!i[h]) {
                    if (b == _click ? j(g, !1, !0) : (/wn|er|in/.test(b) ? D[_add](c) : D[_remove](c + " " + u), A.length && v && c == s && A[/ut|nd/.test(b) ? _remove : _add](w)), !_mobile) return !1;
                    a.stopPropagation()
                }
            })
        })
    }
}(window.jQuery || window.Zepto);
$(".radar").hide(), $(".quiz-modal").hide(), $(".view2").hide(), $(".view3").hide(), $(".view4").hide(), $(".view5").hide(), $(".view6").hide(), $(".view7").hide(), $(".view8").hide(), $(".view9").hide(), $(".view10").hide(), $(window).load(function() {
    $("#warning").modal("show")
}), $(function() {
    setInterval(function() {
        $(".banner-image").last().fadeOut(2e3, function() {
            $this = $(this), $parent = $this.parent(), $this.remove().css("display", "block"), $parent.prepend($this)
        })
    }, 3e3)
}), $(".modal").removeData("bs.modal").modal({
    backdrop: "static",
    keyboard: !1
}), $(document).ready(function() {
    $("input").iCheck({
        checkboxClass: "icheckbox_square-blue",
        radioClass: "iradio_square-blue"
    }), $(".disabledClass").iCheck("destroy")
}), $(".modal-btn").click(function() {
    $(".radar").delay(600).fadeIn(), $(".radar").delay(2600).fadeOut(0), $(".quiz-modal").delay(3400).fadeIn()
}), $(".close-view-1").click(function() {
    $(".view1").hide(), $(".view2").show()
}), $(".close-view-2").click(function() {
    $(".view2").hide(), $(".view3").show()
}), $(".close-view-3").click(function() {
    $(".view3").hide(), $(".view4").show()
}), $(".close-view-4").click(function() {
    $(".view4").hide(), $(".view5").show()
}), $(".close-view-5").click(function() {
    $(".view5").hide(), $(".view6").show()
}), $(".close-view-6").click(function() {
    $(".view6").hide(), $(".view7").show()
}), $(".close-view-7").click(function() {
    $(".view7").hide(), $(".view8").show()
}), $(".close-view-8").click(function() {
    $(".view8").hide(), $(".view9").show()
}), $(".close-view-9").click(function() {
    $(".view9").hide(), $(".view10").show()
});