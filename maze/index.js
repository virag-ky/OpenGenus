import { mazeMap } from './maps.js';

// Create canvas
const createCanvas = () => {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = 800;
  canvasElement.height = 800;
  document.body.appendChild(canvasElement);

  const canvas = document.querySelector('canvas');
  // Get the drawing object
  // The getContext() is a built-in HTML object, with properties and methods for drawing
  return canvas.getContext('2d');
};

const ctx = createCanvas();
const selection = document.querySelector('select');

// Set current maze layout
let currentLayout = mazeMap[0];

// Set width and height for the cells
const width = 800 / currentLayout[0].length;
const height = 800 / currentLayout.length;

const createMaze = (context, arr) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      context.beginPath();

      context.rect(y * width, x * height, width, height);

      context.fillStyle =
        arr[x][y] === 0 ? 'rgb(250, 253, 175)' : 'rgb(100, 66, 253)';
      context.fill();

      context.closePath();
    }
  }
};

selection.addEventListener('change', (event) => {
  switch (event.target.value) {
    case 'layout1':
      currentLayout = mazeMap[0];
      break;
    case 'layout2':
      currentLayout = mazeMap[1];
      break;
    case 'layout3':
      currentLayout = mazeMap[2];
      break;
    case 'layout4':
      currentLayout = mazeMap[3];
      break;
    case 'layout5':
      currentLayout = mazeMap[4];
      break;
    default:
      currentLayout = mazeMap[0];
  }

  document.querySelector('canvas').remove();
  const ctx2 = createCanvas();
  createMaze(ctx2, currentLayout);
});

createMaze(ctx, currentLayout);
