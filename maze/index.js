const mazeContainer = document.getElementById('mazeContainer');
const mazeMap = [];

const createMaze = () => {
  const starterRow = [0];
  const finishRow = [0];
  const topRow = [1];
  const bottomRow = [1];

  // Generate the starter row (where we start), the finish row (where the finish point is), the top and bottom row
  for (let x = 1; x < 12; x++) {
    const randomNum2 = Math.round(Math.random());
    const randomNum3 = Math.round(Math.random());
    if (x === 11) {
      starterRow.push(1);
      finishRow.unshift(1);
    } else {
      starterRow.push(randomNum2);
      finishRow.unshift(randomNum3);
    }
    topRow.push(1);
    bottomRow.push(1);
  }

  // Append starter and finish row
  const randomIndex1 = Math.round(Math.random() * 7);
  const randomIndex2 = Math.round(Math.random() * 7);
  mazeMap.splice(randomIndex1, 0, starterRow);
  mazeMap.splice(randomIndex2, 0, finishRow);

  // Append top and bottom row
  mazeMap.unshift(topRow);
  mazeMap.push(bottomRow);

  // Create maze
  for (let i = 0; i < mazeMap.length; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let j = 0; j < mazeMap[i].length; j++) {
      const square = document.createElement('div');
      if (mazeMap[i][j] === 1) {
        square.setAttribute('class', 'wall');
      } else {
        square.setAttribute('class', 'floor');
      }
      row.appendChild(square);
    }
    mazeContainer.appendChild(row);
  }
};

createMaze();
