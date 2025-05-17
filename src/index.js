'use strict';

import './styles/style.css';

/* constants */

const buttonValues = ['AC', '+/-', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '='];
const operatorValues = ['+', '-', '×', '÷', '='];
const functionValues = ['AC', '+/-', '%'];

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

const display = document.createElement('input');
display.className = 'display';
display.readOnly = true;
display.type = 'text';
calculator.appendChild(display);

const buttonsBox = document.createElement('div');
buttonsBox.className = 'buttonsBox';
calculator.appendChild(buttonsBox);

/* buttons */

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

  buttonsBox.appendChild(button);
});
