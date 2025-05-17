'use strict';

import './styles/style.css';

const app = document.createElement('div');
app.id = 'root';
document.body.appendChild(app);

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Simple Calculator';
app.appendChild(title);

const calculator = document.createElement('main');
calculator.className = 'calculator';
app.appendChild(calculator);
