const positionX = document.getElementById('clientX');
const positionY = document.getElementById('clientY');
const timeStamp = document.getElementById('timestamp');
const downloadBtn = document.getElementById('download');

const data = [];

document.addEventListener('mousemove', (event) => {
  positionX.textContent = event.clientX;
  positionY.textContent = event.clientY;
  timeStamp.textContent = event.timeStamp;
  data.push(
    `Timestamp: ${timeStamp.textContent}, Cursor position-X: ${positionX.textContent}, position-Y: ${positionY.textContent}\n`
  );
  console.log(data);
});

downloadBtn.addEventListener('click', () => {
  // Create a new file with the data
  const file = new Blob(data, { type: 'text/plain' });
  // Create a link element
  const link = document.createElement('a');
  // Create a URL
  link.href = URL.createObjectURL(file);
  // Download the file
  link.download = 'tracking_data.txt';
  // Click the link
  link.click();
});
