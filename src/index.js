'use strict';

import './styles/style.css';

/* constants */
const buttonValues = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const operatorValues = ['+', '-', '×', '÷', '='];
const functionValues = ['AC', '+/-', '%'];

let A = null;
let B = null;
let operator = null;

/* main elements */
const app = document.createElement('div');
app.id = 'root';
document.body.appendChild(app);

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'simple calculator';
app.appendChild(title);

const calculator = document.createElement('main');
calculator.className = 'calculator';
app.appendChild(calculator);

const extraDisplay = document.createElement('div');
extraDisplay.className = 'extraDisplay';
extraDisplay.textContent = '';
calculator.appendChild(extraDisplay);

const display = document.createElement('input');
display.className = 'display';
display.readOnly = true;
display.type = 'text';
calculator.appendChild(display);

const buttonsBox = document.createElement('div');
buttonsBox.className = 'buttonsBox';
calculator.appendChild(buttonsBox);

buttonValues.forEach((value) => {
  const button = document.createElement('button');
  button.textContent = value;
  button.className = 'btn';

  if (operatorValues.includes(value)) {
    button.classList.add('operator');
  } else if (functionValues.includes(value)) {
    button.classList.add('function');
  } else if (value === '0') {
    button.classList.add('zero');
  } else {
    button.classList.add('number');
  }

  button.addEventListener('click', () => onButtonClick(value));
  buttonsBox.appendChild(button);
});

/* logic */
function clear() {
  A = null;
  B = null;
  operator = null;
}

function calculate(numA, numB, operator) {
  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '×':
      return numA * numB;
    case '÷':
      return numB === 0 ? 'Error' : numA / numB;
    default:
      return numB;
  }
}

function onButtonClick(value) {
  if (operatorValues.includes(value)) {
    handleOperator(value);
  } else if (functionValues.includes(value)) {
    handleFunction(value);
  } else {
    handleNumber(value);
  }
}

function handleOperator(value) {
  if (value === '=') {
    if (A !== null && operator && display.value !== '') {
      B = display.value;
      const result = calculate(parseFloat(A), parseFloat(B), operator);
      display.value = result;
      extraDisplay.textContent = `${A} ${operator} ${B} =`;
      clear();
    }
  } else {
    if (A !== null && operator && display.value !== '') {
      B = display.value;
      const result = calculate(parseFloat(A), parseFloat(B), operator);
      display.value = result;
      A = result;
    } else if (display.value !== '') {
      A = display.value;
    }

    operator = value;
    extraDisplay.textContent = `${A} ${operator}`;
    display.value = '';
  }
}

function handleFunction(value) {
  if (value === 'AC') {
    clear();
    display.value = '';
    extraDisplay.textContent = '';
  } else if (value === '+/-') {
    if (display.value && display.value !== '0') {
      display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    }
  } else if (value === '%') {
    display.value = parseFloat(display.value) / 100;
  }
}

function handleNumber(value) {
  if (value === '.') {
    if (!display.value.includes('.')) {
      display.value += '.';
    }
  } else {
    display.value += value;
  }
}
