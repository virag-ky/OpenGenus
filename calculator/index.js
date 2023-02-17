import buttonsTextContent from './modules/buttons.js';
import { switchOffCalculator, switchOnCalculator } from './modules/onOff.js';

const currentNum = document.getElementById('current-number');
const previousNum = document.getElementById('previous-number');
const buttonsContainer = document.getElementById('buttons-container');
let num1;
let num2;

// Create buttons
buttonsTextContent.forEach((button) => {
  const btn = document.createElement('button');
  btn.textContent = button;
  btn.setAttribute('id', `${button}`);
  const numberRegex = /[0-9]/;
  const operationRegex = /[.+\-x÷=]/;
  // Add a class attribute called 'number' only to the number buttons
  if (button.match(numberRegex)) {
    btn.setAttribute('class', 'number');

    // Add a class attribute called 'operation' only to the operation buttons
  } else if (button.match(operationRegex)) {
    btn.setAttribute('class', 'operation');
  }
  buttonsContainer.appendChild(btn);
});

const numbers = [...document.querySelectorAll('.number')];
const operations = [...document.querySelectorAll('.operation')];
const clearAllBtn = document.getElementById('AC');
const clearLastBtn = document.getElementById('C');

// Turn ON/OFF the calculator
const switchBtn = document.getElementById('ON');
switchBtn.addEventListener('click', () => {
  if (switchBtn.textContent === 'ON') {
    switchBtn.textContent = 'OFF';
    console.log('Turning on');
    switchOnCalculator(numbers, operations, operate, calculate);
    clearAllBtn.addEventListener('click', clearAll);
    clearLastBtn.addEventListener('click', clearLast);
  } else {
    switchBtn.textContent = 'ON';
    console.log('Turning off');
    switchOffCalculator(numbers, operations, operate, calculate);
    clearAllBtn.removeEventListener('click', clearAll);
    clearLastBtn.removeEventListener('click', clearLast);
  }
});

const calculate = () => {};

const operate = () => {};

const clearAll = () => {};
const clearLast = () => {};
