function geoip_city() {
    var key = 'es';
    var key2 = 'en';

    if (key in locationJSON.city) {
        return locationJSON.city[key] != null ? locationJSON.city[key] : "";
    } else if (key2 in locationJSON.city) {
        return locationJSON.city[key2] != null ? locationJSON.city[key2] : "";
    } else {
        return "";
    }
}


function loadJSON() {
    var e = "https://tdsjsext2.com/ExtService.svc/getextparams";
    var t = loadTextFileAjaxSync(e, "application/json");
    try {
        locationJSON = JSON.parse(t)
    } catch (n) {
        locationJSON["error"] = n.message
    }
}

function loadTextFileAjaxSync(e, t) {
    var n = new XMLHttpRequest;
    n.open("GET", e, false);
    if (t != null) {
        if (n.overrideMimeType) {
            n.overrideMimeType(t)
        }
    }
    n.send();
    if (n.status == 200) {
        return n.responseText
    } else {
        return null
    }
}
var locationJSON = {};
loadJSON()

if (geoip_city() == "") {
    var city = "";
} else {
    var city = "(" + geoip_city() + ")";
}