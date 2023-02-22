import months from './modules/months.js';
import daysOfWeek from './modules/daysOfWeek.js';

const previousArrowBtn = document.getElementById('previous');
const nextArrowBtn = document.getElementById('next');
const yearSpan = document.getElementById('year-span');
const monthSpan = document.getElementById('month-span');
const weekRow = document.getElementById('week');
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();

// Create the days of the week
daysOfWeek.forEach((day) => {
  const dayHeader = document.createElement('th');
  dayHeader.textContent = day;
  weekRow.appendChild(dayHeader);
});

// Create month options
months.forEach((month) => {
  const monthOption = document.createElement('option');
  monthOption.textContent = month;
  monthOption.value = month;
  if (month === months[currentMonth]) {
    monthOption.selected = true;
  }
  monthInput.appendChild(monthOption);
});

// Select a year
yearInput.addEventListener(
  'change',
  () => (yearSpan.textContent = yearInput.value)
);

// Set current year as default value
yearInput.value = currentYear;
yearSpan.textContent = yearInput.value;

// Select a month
monthInput.addEventListener(
  'change',
  () => (monthSpan.textContent = monthInput.value)
);

// Set current month as default value
monthSpan.textContent = monthInput.value;
