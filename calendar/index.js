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
const currentDay = new Date().getDay();
const daysContainer = document.getElementById('days');
const errorMessage = document.getElementById('error');

// Create the days of the week
daysOfWeek.forEach((day) => {
  const dayHeader = document.createElement('th');
  dayHeader.textContent = day;
  dayHeader.setAttribute('class', 'week');
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
yearInput.addEventListener('change', () => {
  if (yearInput.value === '') {
    errorMessage.textContent =
      'Please, enter a year between 1970-2100. Field can not be empty.';
  } else if (yearInput.value.length !== 4) {
    errorMessage.textContent =
      'Please, enter a year between 1970-2100.\nYear must be 4 digits long.';
  } else if (yearInput.value > 2100 || yearInput.value < 1970) {
    errorMessage.textContent = 'Please, enter a year between 1970-2100.';
  } else {
    yearSpan.textContent = yearInput.value;
    setDays();
  }
});

// Set current year as default value
yearInput.value = currentYear;
yearSpan.textContent = yearInput.value;

// Select a month
monthInput.addEventListener('change', () => {
  monthSpan.textContent = monthInput.value;
  setDays();
});

// Set current month as default value
monthSpan.textContent = monthInput.value;

// Get previous month
previousArrowBtn.addEventListener('click', () => {
  yearSpan.textContent =
    monthSpan.textContent === 'January'
      ? Number(yearSpan.textContent) - 1
      : yearSpan.textContent;
  monthSpan.textContent =
    monthSpan.textContent === 'January'
      ? months[11]
      : months[months.indexOf(monthSpan.textContent) - 1];
  setDays();
});

// Get next month
nextArrowBtn.addEventListener('click', () => {
  yearSpan.textContent =
    monthSpan.textContent === 'December'
      ? Number(yearSpan.textContent) + 1
      : yearSpan.textContent;
  monthSpan.textContent =
    monthSpan.textContent === 'December'
      ? months[0]
      : months[months.indexOf(monthSpan.textContent) + 1];
  setDays();
});

// Set days text
const setDaysText = () => {
  // Get first day of month
  const firstDay = new Date(
    Number(yearSpan.textContent),
    months.indexOf(monthSpan.textContent),
    1
  )
    .toDateString()
    .split(' ')[0];

  // Get last day of month
  const lastDay = new Date(
    Number(yearSpan.textContent),
    months.indexOf(monthSpan.textContent) + 1,
    0
  )
    .toDateString()
    .split(' ')[2];

  let startDay = currentDay;

  switch (firstDay) {
    case 'Sun':
      startDay = 0;
      break;
    case 'Mon':
      startDay = 1;
      break;
    case 'Tue':
      startDay = 2;
      break;
    case 'Wed':
      startDay = 3;
      break;
    case 'Thu':
      startDay = 4;
      break;
    case 'Fri':
      startDay = 5;
      break;
    case 'Sat':
      startDay = 6;
      break;
    default:
      startDay = 0;
  }

  let daysCount = 1;

  for (let x = 1; x <= Number(lastDay); x++) {
    document.getElementById(`${startDay + 1}`).textContent = daysCount++;
    startDay++;
  }
};

// Create days
const setDays = () => {
  daysContainer.innerHTML = '';
  let daysId = 0;

  for (let i = 0; i < 5; i++) {
    const week = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      daysId++;
      const day = document.createElement('td');
      day.setAttribute('class', 'days');
      day.setAttribute('id', `${daysId}`);
      week.appendChild(day);
    }
    daysContainer.appendChild(week);
  }
  setDaysText();
};
setDays();
