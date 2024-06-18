const display = document.querySelector('.display');
const btnClear = document.querySelector('#clearAllBtn');
const calcBtns = document.querySelector('.calculator');

let displayedStr;
let inputValues;

calcBtns.addEventListener('click', (e) => {
    if (e.target.textContent.match(/[0-9]/)) {
        display.textContent += e.target.textContent;
    } else if (e.target.textContent.match(/[+-/*]/)) {
        isSecondOperation(display.textContent);
        display.textContent += e.target.textContent;
    } else if (e.target.textContent.match(/C/)) {
        display.textContent = '';
        inputValues = [];   
    } else if (e.target.textContent.match(/=/)) {
        displayedStr = display.textContent;
        display.textContent += e.target.textContent;
        convertToOperation(displayedStr);
    }
})

function isSecondOperation(str) {
    if (str.match(/[^0-9]/)) {
        displayedStr = str;
        convertToOperation(displayedStr);
    }
}

function convertToOperation(str) {
    if (str.includes('+')) {
        inputValues = displayedStr
            .split('+')
            .map((char) => Number(char));
        inputValues.push('+');
    } else if (str.includes('*')) {
        inputValues = displayedStr
            .split('*')
            .map((char) => Number(char));
        inputValues.push('*');
    } else if (str.includes('/')) {
        inputValues = displayedStr
            .split('/')
            .map((char) => Number(char));
        inputValues.push('/');
    } else if (str.includes('-')) {
        inputValues = displayedStr
            .split('-')
            .map((char) => Number(char));
        inputValues.push('-');
    }
    let answer = operate(...inputValues);
    display.textContent = answer;
}

function operate(operand1, operand2, operator) {
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
    return addend1 + addend2;
}

function subtract(minuend, subtrahend) {
    return (minuend - subtrahend);
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