import buttonsTextContent from './modules/buttons.js';
import { switchOffCalculator, switchOnCalculator } from './modules/onOff.js';

const currentNum = document.getElementById('current-number');
const previousNum = document.getElementById('previous-number');
const buttonsContainer = document.getElementById('buttons-container');
let num1;
let num2;
let operation;
let result;

// Create buttons
buttonsTextContent.forEach((button) => {
  const btn = document.createElement('button');
  btn.textContent = button;
  btn.setAttribute('id', `${button}`);
  const numberRegex = /[0-9]/;
  const operationRegex = /[.+\-x÷]/;
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
const equalBtn = document.getElementById('=');
const clearAllBtn = document.getElementById('AC');
const clearLastBtn = document.getElementById('C');

// Turn ON/OFF the calculator
const switchBtn = document.getElementById('ON');
switchBtn.addEventListener('click', () => {
  if (switchBtn.textContent === 'ON') {
    switchBtn.textContent = 'OFF';
    console.log('Turning on');
    switchOnCalculator(numbers, operations, operate, setNumbers);
    equalBtn.addEventListener('click', getResult);
    clearAllBtn.addEventListener('click', clearAll);
    clearLastBtn.addEventListener('click', clearLast);
    currentNum.textContent = '0';
  } else {
    switchBtn.textContent = 'ON';
    console.log('Turning off');
    switchOffCalculator(numbers, operations, operate, setNumbers);
    equalBtn.removeEventListener('click', getResult);
    clearAllBtn.removeEventListener('click', clearAll);
    clearLastBtn.removeEventListener('click', clearLast);
    currentNum.textContent = '';
    previousNum.textContent = '';
    num1 = 0;
    num2 = null;
    result = null;
    operation = null;
  }
});

const setNumbers = (e) => {
  currentNum.textContent += e.target.textContent;
  if (operation) {
    num2 = Number(currentNum.textContent);
  }
};

const calculate = (num1, num2, operation) => {
  if (operation === '+') {
    return num1 + num2;
  } else if (operation === '-') {
    return num1 - num2;
  } else if (operation === 'x') {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
};

const getResult = () => {
  if (currentNum.textContent !== '' && previousNum.textContent === '') {
    return;
  } else if (currentNum.textContent !== '' && previousNum.textContent !== '') {
    result = calculate(num1, num2, operation);
    currentNum.textContent = result.toString();
    previousNum.textContent = '';
    num1 = result;
    num2 = null;
    result = null;
  } else {
    currentNum.textContent = previousNum.textContent;
    previousNum.textContent = '';
  }
};

const operate = (e) => {
  if (e.target.textContent === '.') {
    if (
      !currentNum.textContent.includes('.') &&
      currentNum.textContent !== ''
    ) {
      currentNum.textContent += '.';
    } else {
      return;
    }
  } else {
    if (!num2 && !operation) {
      previousNum.textContent = currentNum.textContent;
      num1 = Number(previousNum.textContent);
      currentNum.textContent = '';
      operation = e.target.textContent;
    } else if (!num2 && operation) {
      operation = e.target.textContent;
      previousNum.textContent = currentNum.textContent;
      num1 = Number(previousNum.textContent);
      currentNum.textContent = '';
    } else if (num2 && operation) {
      result = calculate(num1, num2, operation);
      previousNum.textContent = result.toString();
      currentNum.textContent = '';
      num1 = result;
      num2 = null;
      result = null;
    }
  }
};

const clearAll = () => {};
const clearLast = () => {};
