const progressBar = document.getElementById('progress-bar');
const runProgressButton = document.getElementById('run-progress');
const progressNumber = document.getElementById('progress-number');

const runProgress = () => {
  let width = 0;
  const progressInterval = () => {
    // if there is a number value in the input, then run the progress until the given value
    if (progressNumber.value) {
      if (width >= 100 || width >= progressNumber.value) {
        clearInterval(intervalId);
        progressNumber.value = '';
      } else {
        width++;
        progressBar.style.width = `${width}%`;
        progressBar.innerText = `${width}%`;
      }
    } else {
      // if there is no number value in the input, then just run the progress until 100%
      if (width >= 100) {
        clearInterval(intervalId);
      } else {
        width++;
        progressBar.style.width = `${width}%`;
        progressBar.innerText = `${width}%`;
      }
    }
  };

  let intervalId = setInterval(progressInterval, 10);
};

runProgressButton.addEventListener('click', runProgress);
