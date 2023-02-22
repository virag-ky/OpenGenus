const yearDisplay = document.getElementById('year');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

yearDisplay.textContent = `${currentYear} ${months[currentMonth]}`;
