const canvas = document.getElementById('container');
// Get the drawing object
// The getContext() is a built-in HTML object, with properties and methods for drawing
const ctx = canvas.getContext('2d');
const mazeMap = [];

// Create maze array
const createMazeArray = () => {
  const starterRow = [0];
  const finishRow = [0];
  const topRow = [];
  const bottomRow = [];

  // Generate regular rows
  for (let y = 0; y < 50; y++) {
    const row = [];
    for (z = 0; z < 50; z++) {
      const rand = Math.round(Math.random());
      if (z === 0) {
        row.push(1);
      } else if (z === 49) {
        row.push(1);
      } else {
        row.push(rand);
      }
    }
    mazeMap.push(row);
  }

  // Generate the starter row (where we start), the finish row (where the finish point is), the top and bottom row
  for (let x = 0; x < 50; x++) {
    const randomNum = Math.round(Math.random());
    if (x === 49) {
      starterRow.push(1);
      finishRow.unshift(1);
    } else {
      starterRow.push(randomNum);
      finishRow.unshift(randomNum);
    }
    topRow.push(1);
    bottomRow.push(1);
  }

  // Append starter and finish row
  const randomIndex = Math.round(Math.random() * 7);
  const randomIndex2 = Math.round(Math.random() * 7);
  mazeMap.splice(randomIndex, 0, starterRow);
  mazeMap.splice(randomIndex2, 0, finishRow);

  // Append top and bottom row
  mazeMap.unshift(topRow);
  mazeMap.push(bottomRow);
};
createMazeArray();

// Set width and height for the cells
let width = 800 / mazeMap[0].length;
let height = 800 / mazeMap.length;

const createMaze = (context, arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      context.beginPath();

      context.rect(j * width, i * height, width, height);

      context.fillStyle = arr[i][j] === 0 ? 'white' : 'blue';
      context.fill();

      context.closePath();
    }
  }
};

createMaze(ctx, mazeMap);
