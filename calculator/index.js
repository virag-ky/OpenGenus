import buttonsTextContent from './modules/buttons.js';
import { switchOffCalculator, switchOnCalculator } from './modules/onOff.js';

const currentNum = document.getElementById('current-number');
const previousNum = document.getElementById('previous-number');
const buttonsContainer = document.getElementById('buttons-container');
let num1;
let num2;
let currentOperation;
let previousOperation;
let result;
let current;

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
    switchOnCalculator(numbers, operations, setOperation, setNumbers);
    equalBtn.addEventListener('click', getResult);
    clearAllBtn.addEventListener('click', clearAll);
    clearLastBtn.addEventListener('click', clearLast);
    currentNum.textContent = '0';
    current = 0;
    num1 = null;
    num2 = null;
    currentOperation = null;
    previousOperation = null;
    result = null;
  } else {
    switchBtn.textContent = 'ON';
    console.log('Turning off');
    switchOffCalculator(numbers, operations, setOperation, setNumbers);
    equalBtn.removeEventListener('click', getResult);
    clearAllBtn.removeEventListener('click', clearAll);
    clearLastBtn.removeEventListener('click', clearLast);
    currentNum.textContent = '';
    previousNum.textContent = '';
  }
});

// Set the numbers
const setNumbers = (e) => {
  currentNum.textContent += e.target.textContent;
  current = Number(currentNum.textContent);
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
    num2 = current;
    result = calculate(num1, num2, previousOperation);
    currentNum.textContent = result.toString();
    previousNum.textContent = '';
    current = result;
    num1 = null;
    num2 = null;
    previousOperation = null;
    currentOperation = null;
    // If we have a previous number but no current, then we just show the previous number in the current field
  } else {
    currentNum.textContent = num1.toString();
    previousNum.textContent = '';
    current = num1;
    num1 = null;
    previousOperation = null;
    currentOperation = null;
  }
};

const setOperation = (e) => {
  // Check if the dot is being clicked
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
    if (!num1 && !num2) {
      previousOperation = e.target.textContent;
      num1 = current;
      previousNum.textContent = `${num1} ${previousOperation}`;
      currentNum.textContent = '';
      current = null;
    } else {
      currentOperation = e.target.textContent;
      num2 = current;
      result = calculate(num1, num2, previousOperation);
      previousNum.textContent = `${result} ${currentOperation}`;
      previousOperation = currentOperation;
      currentNum.textContent = '';
      num1 = result;
      current = null;
      num2 = null;
    }
  }
};

const clearAll = () => {};
const clearLast = () => {};
