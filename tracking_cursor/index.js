const positionX = document.getElementById('clientX');
const positionY = document.getElementById('clientY');
const timeStamp = document.getElementById('timestamp');
const downloadBtn = document.getElementById('download');

document.addEventListener('mousemove', (event) => {
  positionX.textContent = event.clientX;
  positionY.textContent = event.clientY;
  timeStamp.textContent = event.timeStamp;
});
