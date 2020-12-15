var spinElements = ['bell', 'cherry', 'diamond', 'grape', 'horse', 'leaf', 'prune', 'seven'];
var animations = ["flash", "pulse", "rubberBand", "shake", "headShake", "swing", "tada", "wobble", "jello", "heartBeat", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "jackInTheBox", "rollIn", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "slideInDown", "slideInLeft", "slideInRight", "slideInUp"];
var winningAnimations = ["flip"];

window.spinsLeft = 3;
window.winnerClass = 'seven';

function getRandElement(arr) {
    var i = ((arr.length - 1) * Math.random()).toFixed();
    if (typeof arr[i] === 'undefined') {
        debugger;
    }
    return arr[i];
}

function endSpin() {
    var winner = (!spinsLeft) ? winnerClass : false;
    var animationName = 'spinDown';
    clearInterval(window.inSpin);
    var $gameRow = $('.game-row');
    var allRowsIndex = $('.game-row').length - 1;
    $gameRow.each(function(rowIndex, rowElement) {
        $('body').trigger('col-spin-start');
        var rowImagesIndex = $(this).find('.game-element img').length - 1;
        $(this).find('.game-element img').each(function(imageIndex, imageElement) {
            var that = this;
            var element = getRandElement(spinElements);
            if (winner) {
                element = winner;
            }
            $(that).removeClass(animationName + ' animated');
            $(that).attr('class', element);
            if (imageIndex === rowImagesIndex && allRowsIndex === rowIndex) {
                if (!spinsLeft) {
                    $('body').trigger('game-end');
                }
                animateCSS(that, animationName, function() {
                    $('body').trigger('spin-end');
                });
            } else {
                animateCSS(that, animationName);
            }
        });
    });
}

function updateSpins() {
    window.spinsLeft--;
    $('.spins_left').html(window.spinsLeft + '');
}

function startSpin() {
    if (window.spinsLeft == 0 || window.inSpin) {
        return;
    }
    $('body').trigger('spin-start');
    window.inSpin = setInterval(repopulateElements, 10);
    setTimeout(endSpin, 2200);
}

function repopulateElements() {
    var imgSrc = $('.game-row img:first').attr('src');
    var html = '';
    $('body').trigger('in-spin');
    for (var i = 0; i < 3; i++) {
        html = '';
        for (var j = 0; j < 20; j++) {
            var element = getRandElement(spinElements);
            html += '<div class="game-element"><img src="' + imgSrc + '" class="spinDown animated ' + element + '" /></div>';
        }
        $('.game-row:eq(' + i + ')').html(html);
    }
}

function animateCSS(element, animationName, callback) {
    $(element).addClass('animated ' + animationName)

    function handleAnimationEnd() {
        $(element).removeClass('animated ' + animationName);
        $(element).off('animationend', handleAnimationEnd);
        if (typeof callback === 'function') {
            callback();
        }
    }
    $(element).on('animationend', handleAnimationEnd);
}

function winEffect(element, animation, index) {
    $('.game-row').each(function(index, element) {
        var animation = winningAnimations[index % winningAnimations.length];
        animateCSS(element, animation, function() {
            $(element).find('.' + winnerClass).each(function(index, element) {
                var animation = winningAnimations[0];
                animateCSS(element, animation, function() {

                });
            });
        });
    });
}

$(function() {
    $body = $('body');
    $('.game-element').each(function() {
        $(this).find('img').attr('class', getRandElement(spinElements));
    });

    $body.on('spin-start', function() {
        updateSpins();
    });

    $body.on('spin-end', function() {
        window.inSpin = false;
    });

    $body.on('game-end', function() {
        window.winInterval = setInterval(winEffect, 750);
        setTimeout(function() {
            clearInterval(window.winInterval);
            $('.' + window.winnerClass).removeClass('animated').addClass('animated flip');
            setTimeout(function() {
                var screen = $('.screen');
                screen.show();

                $('html,body').addClass('over');
                $('html,body').attr('style', 'overflow:hidden');
                $('.container-fluid,.game,footer').addClass('blur').addClass('blur-filter');
                animateCSS(screen[0], 'zoomIn', function() {
                    $('.offer-image').show();
                    animateCSS($('.offer-image')[0], 'zoomInUp');
                })
            }, 1500);
        }, 5000);
    });

    $body.on('row-spin-end', function() {
        window.inSpin = false;
    });

    $body.on('row-spin-start', function() {

    });

    $body.one('click', '.spin', function() {

    });
    $body.on('click', '.spin', function() {
        startSpin();
    });
});
var timeStarted = 10 * 60;

function getLeftTime() {
    timeStarted--;
    var minutesLeft = Math.floor(timeStarted / 60);
    var secondsLeft = timeStarted % 60;
    $('#time_down').text(minutesLeft + 'm ' + secondsLeft + 's');
}
setInterval(getLeftTime, 1000);