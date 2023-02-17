const switchOnCalculator = (numbers, operations, operate, setNumbers) => {
  numbers.forEach((number) => {
    number.addEventListener('click', setNumbers);
  });
  operations.forEach((operation) => {
    operation.addEventListener('click', operate);
  });
};

const switchOffCalculator = (numbers, operations, operate, setNumbers) => {
  numbers.forEach((number) => {
    number.removeEventListener('click', setNumbers);
  });
  operations.forEach((operation) => {
    operation.removeEventListener('click', operate);
  });
};

export { switchOffCalculator, switchOnCalculator };
