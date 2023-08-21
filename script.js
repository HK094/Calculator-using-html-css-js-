let currentInput = '';
let operator = '';
let firstOperand = '';

function updateNumber(number) {
    currentInput += number;
    updateDisplay();
}

function updateOperator(op) {
    if (currentInput !== '') {
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentInput !== '' && firstOperand !== '' && operator !== '') {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);
        let result;

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }

        currentInput = firstOperand + operator + currentInput + '=' + result;
        operator = '';
        firstOperand = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.display').value = currentInput;


}
