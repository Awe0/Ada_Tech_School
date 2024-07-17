const daysInMonth = {
    '01': 31,
    '02': 28,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31
};

function isValidDate(dateString){
    if (typeof dateString != 'string') return false;
    if (dateString === '' || dateString === null) return false;
    const dateParsed = dateString.split('');
    if (dateParsed.length != 10 || dateParsed[2] != '/') return false;
    const day = dateParsed[0]+dateParsed[1];
    const month = dateParsed[3]+dateParsed[4];
    const year = dateParsed[6]+dateParsed[7]+dateParsed[8]+dateParsed[9];
    if (!(month in daysInMonth)) return false;
    const maxDays = daysInMonth[month];
    if (month === '02' && isLeapYear(year) === true) {
        maxDays = 29;
    }
    if (parseInt(day) > maxDays || parseInt(day) <= 0) return false;
    if (parseInt(year) < 1 || parseInt(year) > 9999) return false;
    return true;
}

function isLeapYear(year){
    parseInt(year);
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isValidDate('02/10/1939'))

module.exports = isValidDate;