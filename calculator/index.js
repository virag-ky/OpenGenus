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

// Set the numbers
const setNumbers = (e) => {
  currentNum.textContent += e.target.textContent;
  // If we already have an operation clicked, then the next number we type in will be saved in the num2 variable
  if (operation) {
    num2 = Number(currentNum.textContent);
  }
};

// Perform calculations
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

// Click the equal button to get the final result
const getResult = () => {
  // If we only have a current number but no previous, then we just return and do nothing
  if (currentNum.textContent !== '' && previousNum.textContent === '') {
    return;
    // If we have both current and previous numbers, then we perform the calculation and save it into the result variable
  } else if (currentNum.textContent !== '' && previousNum.textContent !== '') {
    result = calculate(num1, num2, operation);
    currentNum.textContent = result.toString();
    previousNum.textContent = '';
    num1 = result;
    num2 = null;
    result = null;
    // If we have a previous number but no current, then we just show the previous number in the current field
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
    } else if (num2 && operation) {
      result = calculate(num1, num2, operation);
      previousNum.textContent = result.toString();
      currentNum.textContent = '';
      num1 = result;
      num2 = null;
      result = null;
    } else if (!num2 && operation) {
      operation = e.target.textContent;
      previousNum.textContent = currentNum.textContent;
      currentNum.textContent = '';
    }
  }
};

const clearAll = () => {};
const clearLast = () => {};
