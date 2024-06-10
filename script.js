let operand1, operator, operand2;

function operate(operand1, operator, operand2) {
    switch(operator) {
        case '+' :
            return add(operand1, operand2);
        case '-' :
            return subtract(operand1, operand2);
        case '*' :
            return multiply(operand1, operand2);
        case '/' :
            return divide(operand1, operand2);
    }
}

function add(addend1, addend2) {
    operand1 = addend1, operator = '+', operand2 = addend2;
    return addend1 + addend2;
}

function subtract(minuend, subtrahend) {
    operand1 = minuend, operator = '-', operand2 = subtrahend;
    return minuend - subtrahend;
}

function multiply(multiplicand, multiplier) {
    operand1 = multiplicand, operator = '*', operand2 = multiplier;
    return multiplicand * multiplier;
}

function divide(dividend, divisor) {
    operand1 = dividend, operator = '/', operand2 = divisor;
    if (divisor === 0) {
        return 'nope'
    }
    return Math.round(dividend / divisor);
}