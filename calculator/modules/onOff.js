const switchOnCalculator = (numbers, operations, operate, calculate) => {
  numbers.forEach((number) => {
    number.addEventListener('click', calculate);
  });
  operations.forEach((operation) => {
    operation.addEventListener('click', operate);
  });
};

const switchOffCalculator = (numbers, operations, operate, calculate) => {
  numbers.forEach((number) => {
    number.removeEventListener('click', calculate);
  });
  operations.forEach((operation) => {
    operation.removeEventListener('click', operate);
  });
};

export { switchOffCalculator, switchOnCalculator };
