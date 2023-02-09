const progressBar = document.getElementById('progress-bar');
const runProgressButton = document.getElementById('run-progress');
let width = 1;
let counter = 0;

const runProgress = () => {
  const progressInterval = () => {
    if (width >= 100) {
      clearInterval(intervalId);
      counter = 0;
    } else {
      width++;
      progressBar.style.width = `${width}%`;
    }
  };
  let intervalId = setInterval(progressInterval, 30);
};

runProgressButton.addEventListener('click', runProgress);
