function calculateDaysBetweenDates(begin, end) {
    return Math.ceil((end - begin) / 1000 / 60 / 60 / 24);
}