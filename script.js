function add(addend1, addend2) {
    return addend1 + addend2;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {
    if (divisor === 0) {
        return 'nope'
    }
    return Math.round(dividend / divisor);
}