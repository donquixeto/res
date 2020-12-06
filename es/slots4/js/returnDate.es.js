//------------------------------------
//------------------------------------
//------- SPANISH DATE CODE ---------- 
//------------------------------------
//------------------------------------

function returnDate(format, print) {
    var out;

    var curDate = new Date();
    var year = curDate.getFullYear();
    var month = curDate.getMonth();
    var day = curDate.getDate();
    var dayofweek = curDate.getDay();
    var hour = curDate.getHours();

    var daysofweek = new Array('domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado');
    var months = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');

    if (format == "timeofday") {
        if (hour < 12) out = "mañana";
        else if (hour < 17) out = "tarde";
        else out = "noche";
    } else if (format == "dayofweek") {
        out = daysofweek[dayofweek];
    } else if (format == "day") {
        out = day;
    } else if (format == "month") {
        out = months[month];
    } else if (format == "year") {
        out = year;
    } else {
        out = day + ' de ' + months[month] + ' de ' + year;
    }
    if (print)
        document.write(out);
    else
        return out;
}