import { mazeMap } from './maps.js';

const canvas = document.getElementById('container');
// Get the drawing object
// The getContext() is a built-in HTML object, with properties and methods for drawing
const ctx = canvas.getContext('2d');

// Set width and height for the cells
const width = 800 / mazeMap[0].length;
const height = 800 / mazeMap.length;

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

createMaze(ctx, mazeMap);
