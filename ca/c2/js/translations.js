function getTranslation(countryCode) {
    switch (countryCode) {
        case 'ZA':
            return {
                'spin_and_win': 'Slots',
                'only_today': 'ONLY TODAY!',
                'spins_has': '<span id="get">Get </span><span class="gold" id="spins_left">3 Free Spins</span>',
                'ac_jackpot': '<span id="actual_jackpot">Actual Jackpot: </span> <span class="gold" id="jackpot">R237,123</span>',
                'time_down': '<span id="spin_before"> Spin Before is over! </span><span class="gold" id="time_down">24M 15s</span>',
                'spins_left': '<span id="spins_info">You have <span class="spins_left">3</span> spins!</span>',
                'spin': 'SPIN',
                'offer': '<img class="img-fluid offer-image" src="//xstatic.europacasino.com/offers/offers/assets/images/offers/default/en_zar_2400.png" alt="winning offer" />'
            };
        case 'BR':
            return {
                'spin_and_win': 'Europa Casino - Rodee Ganhe!',
                'only_today': 'APENAS HOJE!',
                'spins_has': '<span id="get">Ganhe </span><span class="gold" id="spins_left">3 Rotações Grátis</span>',
                'ac_jackpot': '<span id="actual_jackpot">Jackpot Actual: </span> <span class="gold" id="jackpot">$R1,243,686</span>',
                'time_down': '<span id="spin_before"> Rode antes que acabe! </span><span class="gold" id="time_down">24M 15s</span>',
                'spins_left': '<span id="spins_info">Tem <span class="spins_left">3</span> rotações!</span>',
                'spin': 'RODE',
                'offer': '<img class="img-fluid offer-image" src="//xstatic.europacasino.com/offers/offers/assets/images/offers/default/pt_brl_2400.png" alt="winning offer" />'
            };
        case 'IN':
            return {
                'spin_and_win': 'Slots',
                'only_today': 'ONLY TODAY!',
                'spins_has': '<span id="get">Get </span><span class="gold" id="spins_left">3 Free Spins</span>',
                'ac_jackpot': '<span id="actual_jackpot">Actual Jackpot: </span> <span class="gold" id="jackpot">₹2,370,123</span>',
                'time_down': '<span id="spin_before"> Spin Before is over! </span><span class="gold" id="time_down">24M 15s</span>',
                'spins_left': '<span id="spins_info">You have <span class="spins_left">3</span> spins!</span>',
                'spin': 'SPIN',
                'offer': '<img class="img-fluid offer-image" src="//xstatic.europacasino.com/offers/offers/assets/images/offers/default/en_inr_welcome.png" alt="winning offer" />'
            };
        case 'GI':
        case 'IE':
            return {
                'spin_and_win': 'Slots',
                'only_today': 'ONLY TODAY!',
                'spins_has': '<span id="get">Get </span><span class="gold" id="spins_left">3 Free Spins</span>',
                'ac_jackpot': '<span id="actual_jackpot">Actual Jackpot: </span> <span class="gold" id="jackpot">$239,053</span>',
                'time_down': '<span id="spin_before"> Spin Before is over! </span><span class="gold" id="time_down">24M 15s</span>',
                'spins_left': '<span id="spins_info">You have <span class="spins_left">3</span> spins!</span>',
                'spin': 'SPIN',
                'offer': '<img class="img-fluid offer-image" src="//xstatic.europacasino.com/offers/offers/assets/images/offers/default/en_eur_2400.png" alt="winning offer" />'
            };
        default:
            return {
                'spin_and_win': 'Slots',
                'only_today': 'ONLY TODAY!',
                'spins_has': '<span id="get">Get </span><span class="gold" id="spins_left">3 Free Spins</span>',
                'ac_jackpot': '<span id="actual_jackpot">Actual Jackpot: </span> <span class="gold" id="jackpot">$239,053</span>',
                'time_down': '<span id="spin_before"> Spin Before is over! </span><span class="gold" id="time_down">24M 15s</span>',
                'spins_left': '<span id="spins_info">You have <span class="spins_left">3</span> spins!</span>',
                'spin': 'SPIN',
                'offer': '<img class="img-fluid offer-image" src="//xstatic.europacasino.com/offers/offers/assets/images/offers/default/en_eur_2400.png" alt="winning offer" />'
            }
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCountryCode() {
    var global = getCookie('_global');
    if (!global) {
        return 'IE';
    }
    return global.split(',')[0];
}

function translate() {
    var countryTranslations = getTranslation(getCountryCode());
    for (var i in countryTranslations) {
        $('[data-transltion-key="' + i + '"]').html(countryTranslations[i]);
    }
}
translate();