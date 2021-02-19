function setDateFormat(value, format = 'y-m-d') {
    var rawDate = new Date(value);
    var arrayFormat = ['y-m-d', 'm-d-y', 'd-m-y', 'y/m/d', 'm/d/y', 'd/m/y'];
    var dateFormat = 'y-m-d'; // default return format

    for (var i in arrayFormat) {
        if (format.toLowerCase() == arrayFormat[i]) {
            dateFormat = format;
        }
    }

    var formatter = "-";
    if (dateFormat.indexOf("/") >= 0) {
        formatter = "/";
    }

    var yIndex = dateFormat.indexOf('y');
    var mIndex = dateFormat.indexOf('m');
    var dIndex = dateFormat.indexOf('d');

    var dateIndex = [yIndex, mIndex, dIndex];
    dateIndex = dateIndex.sort();

    var formatted = '';
    for (var i = 0; i < dateIndex.length; i++) {
        if (dateFormat[ dateIndex[i] ] == 'd') {
            var day = String("00" + rawDate.getDate()).slice(-2);
            formatted += formatter + day;
        }

        if (dateFormat[ dateIndex[i] ] == 'm') {
            var month = String("00" + (rawDate.getMonth() + 1)).slice(-2);
            formatted += formatter + month;
        }

        if (dateFormat[ dateIndex[i] ] == 'y') {
            formatted += formatter + rawDate.getFullYear();
        }
    }

    return formatted.substring(1);
}