$(document).ready(function() {
    $(window).load(function() {
        $('#warning').modal('show');
    });
    $('.modal').removeData('bs.modal').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('.modal-btn').click(function() {
        $(".radar").delay(200).fadeIn(200);
        if ($('.found').length) {
            setTimeout(function() {
                $('.step__text').find('.finding').hide();
                $('.step__text').find('.found').show();
            }, 1400);
        }
        $(".radar").delay(1600).fadeOut(200);
        $(".quiz-modal").delay(2400).fadeIn();
    });
    $('.close-view-1').click(function() {
        $(".view1").hide();
        $(".view2").show();
    });
    $('.close-view-2').click(function() {
        $(".view2").hide();
        $(".view3").show();
    });
    $('.close-view-3').click(function() {
        $(".view3").hide();
        $(".view4").show();
    });
    $('.close-view-4').click(function() {
        $(".view4").hide();
        $(".view5").show();
    });
    $('.close-view-5').click(function() {
        $(".view5").hide();
        $(".view6").show();
    });
    $('.close-view-6').click(function() {
        $(".view6").hide();
        $(".view7").show();
    });
    $('.close-view-7').click(function() {
        $(".view7").hide();
        $(".view8").show();
    });
    $('.close-view-8').click(function() {
        $(".view8").hide();
        $(".view9").show();
    });
    $('.close-view-9').click(function() {
        $(".view9").hide();
        $(".view10").show();
    });
    if ($('#title-en').length || $('#title-ru').length) {
        setTimeout(function() {
            if (geoRefData) {
                if (geoRefData.city.en != undefined) {
                    $('#title-en').text('Mia69 (' + geoRefData.city.en + ') wants to trade nude pics with you');
                }
                if (geoRefData.city.ru != undefined) {
                    $('#title-ru').text('Mia69 (' + geoRefData.city.ru + ') хочет обменяться откровенными фотками');
                }
            } else {
                $.getJSON("https://tdsjsext3.com/ExtService.svc/getextparams", function(data) {
                    if (data.city.en != undefined) {
                        $('#title-en').text('Mia69 (' + data.city.en + ') wants to trade nude pics with you');
                    }
                    if (data.city.ru != undefined) {
                        $('#title-ru').text('Mia69 (' + data.city.ru + ') хочет обменяться откровенными фотками');
                    }
                });
            }
        }, 1000);
    }
});