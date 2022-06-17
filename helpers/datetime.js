function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

/**
 * Get today's date in yyyy.m.d format
 */
function formatDate(date) {
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
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