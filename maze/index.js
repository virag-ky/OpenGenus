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
let grid = [];
let current;
let arrayStack = [];

// Set width and height for the cells
let width = 80;
const columns = 800 / width;
const rows = 800 / width;

// Create index
const index = (i, j) => {
  if (i < 0 || j < 0 || i > columns || j > rows - 1) {
    return -1;
  }
  return i + j * columns;
};

// Create cell instances
function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = () => {
    const neighbors = [];
    const top = grid[index(i, j - 1)];
    const right = grid[index(i + 1, j)];
    const bottom = grid[index(i, j + 1)];
    const left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      const randomNum = Math.round(Math.random() * neighbors.length);
      return neighbors[randomNum];
    } else {
      return undefined;
    }
  };

  this.show = () => {
    const x = this.i * width;
    const y = this.j * width;

    if (this.walls[0]) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y);
      ctx.stroke();
      ctx.closePath();
    }
    if (this.walls[1]) {
      ctx.beginPath();
      ctx.moveTo(x + width, y);
      ctx.lineTo(x + width, y + width);
      ctx.stroke();
      ctx.closePath();
    }
    if (this.walls[2]) {
      ctx.beginPath();
      ctx.moveTo(x + width, y + width);
      ctx.lineTo(x, y + width);
      ctx.stroke();
      ctx.closePath();
    }
    if (this.walls[3]) {
      ctx.beginPath();
      ctx.moveTo(x, y + width);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
    }

    if (current.visited) {
      ctx.beginPath();
      ctx.rect(current.i, current.j, width, width);
      ctx.fillStyle = 'purple';
      ctx.fill();
      ctx.closePath();
    }
  };
}

const drawMaze = () => {
  for (let z = 0; z < grid.length; z++) {
    grid[z].show();
  }

  const next = current.checkNeighbors();

  if (next) {
    next.visited = true;
    current = next;
  }
};

const createCells = () => {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
      const cell = new Cell(x, y);
      grid.push(cell);
    }
  }
  current = grid[0];
  current.visited = true;
  drawMaze();
};

createCells();
