function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

/**
 * Get today's date in dd.mm.yyyy format
 */
function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear()
    ].join('.');
}

function formatTime(time) {
    return [
        padTo2Digits(time.getHours()),
        padTo2Digits(time.getMinutes()),
        padTo2Digits(time.getSeconds())
    ].join(':');
}

module.exports = {
    formatDate,
    formatTime
}