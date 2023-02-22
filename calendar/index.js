import months from './modules/months.js';

const previousArrowBtn = document.getElementById('previous');
const nextArrowBtn = document.getElementById('next');

const getCurrentYearAndMonth = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const yearSpan = document.getElementById('year');
  const monthSpan = document.getElementById('month');

  yearSpan.textContent = `${currentYear}`;
  monthSpan.textContent = `${months[currentMonth]}`;
};

getCurrentYearAndMonth();
