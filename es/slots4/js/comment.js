var _0x3425 = ['few', '#count', '\x20.comtxt,\x20', '\x20.combot', 'css', 'random', 'html', 'round', 'ready', '#timer', '.like', 'hasClass', 'selected', 'removeClass', 'Like', '#youand', 'You\x20and\x20', '.fblike', 'click', 'addClass', 'Unlike', '#fb1', '#fb3', '#fb4', '#fb5', '#fb6', '#fb7', '#fb8'];
(function(_0x57d67e, _0x32c9fe) {
    var _0x54be33 = function(_0x2e85d3) {
        while (--_0x2e85d3) {
            _0x57d67e['push'](_0x57d67e['shift']());
        }
    };
    _0x54be33(++_0x32c9fe);
}(_0x3425, 0x18a));
var _0x40a3 = function(_0x22e8dc, _0x440fe6) {
    _0x22e8dc = _0x22e8dc - 0x0;
    var _0x128b48 = _0x3425[_0x22e8dc];
    return _0x128b48;
};

function FBcom(_0x383472, _0x45314b) {
    setTimeout(function() {
        var _0x4802cb = 0x0,
            _0x20c04c = !![],
            _0x419583 = 0x0;
        $(_0x383472 + ',\x20' + _0x383472 + _0x40a3('0x0') + _0x383472 + _0x40a3('0x1'))['slideDown'](0x1f4);
        $()['slideDown'](0x1f4);
        var _0x59ca77 = setInterval(function() {
            _0x419583 += 0.2;
            $(_0x383472)[_0x40a3('0x2')]({
                'opacity': _0x419583
            });
            _0x4802cb++;
            if (_0x4802cb == 0x5) clearInterval(_0x59ca77);
        }, 0x64);
    }, _0x45314b);
}

function random(_0x5b767f, _0x4d8cf9) {
    return Math['round'](Math[_0x40a3('0x3')]() * (_0x4d8cf9 - _0x5b767f) + _0x5b767f);
}

function checkZero(_0x505fd6) {
    if (_0x505fd6 < 0xa) {
        return '0' + _0x505fd6;
    } else {
        return _0x505fd6;
    }
}

function timer(_0x483afd, _0x47dbe0) {
    var _0x21274d = checkZero(Math['round']((_0x483afd - 0x1e) / 0x3c));
    var _0x1e05c7 = checkZero(_0x483afd % 0x3c);
    $(_0x47dbe0)[_0x40a3('0x4')](_0x21274d + ':' + _0x1e05c7);
    var _0x538318 = setInterval(function() {
        _0x483afd--;
        _0x21274d = checkZero(Math[_0x40a3('0x5')]((_0x483afd - 0x1e) / 0x3c));
        _0x1e05c7 = checkZero(_0x483afd % 0x3c);
        $(_0x47dbe0)[_0x40a3('0x4')](_0x21274d + ':' + _0x1e05c7);
        if (_0x483afd == 0x0) {
            clearInterval(_0x538318);
        }
    }, 0x3e8);
    return ![];
}
$(document)[_0x40a3('0x6')](function() {
    timer(0xe7, _0x40a3('0x7'));
    $(_0x40a3('0x8'))['click'](function() {
        if ($(this)[_0x40a3('0x9')](_0x40a3('0xa'))) {
            $(this)[_0x40a3('0xb')]('selected');
            $(this)[_0x40a3('0x4')](_0x40a3('0xc'));
            $('#youand')[_0x40a3('0x4')]('');
        } else {
            $(this)['addClass'](_0x40a3('0xa'));
            $(this)['html']('Unlike');
            $(_0x40a3('0xd'))[_0x40a3('0x4')](_0x40a3('0xe'));
        }
    });
    $(_0x40a3('0xf'))[_0x40a3('0x10')](function() {
        if ($(this)[_0x40a3('0x9')]('selected')) {
            $(this)[_0x40a3('0xb')](_0x40a3('0xa'));
            $(this)['html'](_0x40a3('0xc'));
        } else {
            $(this)[_0x40a3('0x11')](_0x40a3('0xa'));
            $(this)['html'](_0x40a3('0x12'));
        }
    });
    FBcom(_0x40a3('0x13'), 0xbb8);
    FBcom('#fb2', 0x1f40);
    FBcom(_0x40a3('0x14'), 0x3a98);
    FBcom(_0x40a3('0x15'), 0x4a38);
    FBcom(_0x40a3('0x16'), 0x7724);
    FBcom(_0x40a3('0x17'), 0xcf08);
    FBcom(_0x40a3('0x18'), 0x124f8);
    FBcom(_0x40a3('0x19'), 0x15f90);
    var _0x561f46 = 0x30;
    (function loop() {
        var _0x16b8e9 = random(0x9c4, 0x157c);
        var _0x1c231d = random(0x1, 0x4);
        _0x561f46 = _0x561f46 - _0x1c231d;
        if (_0x561f46 > 0x1) {
            setTimeout(function() {
                loop();
            }, _0x16b8e9);
        } else {
            _0x561f46 = _0x40a3('0x1a');
        }
        $(_0x40a3('0x1b'))['html'](_0x561f46);
    }());
});