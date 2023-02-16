const currentNum = document.getElementById('current-number');
const previousNum = document.getElementById('previous-number');
const buttonsContainer = document.getElementById('buttons-container');

const buttonsTextContent = [
  'ON',
  'AC',
  'C',
  '+',
  '7',
  '8',
  '9',
  '-',
  '4',
  '5',
  '6',
  'x',
  '1',
  '2',
  '3',
  '÷',
  '0',
  '.',
  '=',
];

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

const operations = document.querySelectorAll('.operation');

// Turn ON/OFF the calculator
const switchBtn = document.getElementById('ON');
switchBtn.addEventListener('click', () => {
  if (switchBtn.textContent === 'ON') {
    switchBtn.textContent = 'OFF';
    console.log('Turning on');
    operateCalculator();
  } else {
    switchBtn.textContent = 'ON';
    console.log('Turning off');
  }
});

const operateCalculator = () => {
  const numbers = [...document.querySelectorAll('.number')];
  numbers.forEach((number) => {
    number.addEventListener('click', () => {
      console.log(number.textContent);
    });
  });
};
