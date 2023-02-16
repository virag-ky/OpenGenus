const buttonsContainer = document.getElementById('buttons-container');

const buttonsTextContent = [
  'On',
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
  'X',
  '1',
  '2',
  '3',
  '÷',
  '0',
  '.',
  '=',
];

buttonsTextContent.forEach((button) => {
  const btn = document.createElement('button');
  btn.textContent = button;
  btn.setAttribute('id', `${button}`);
  buttonsContainer.appendChild(btn);
});

const switchBtn = document.getElementById('On');
switchBtn.addEventListener('click', () => {
  switchBtn.textContent === 'On' ? 'Off' : 'On';
});
