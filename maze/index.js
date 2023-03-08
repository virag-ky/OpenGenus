const mazeContainer = document.getElementById('mazeContainer');

const mazeMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const createMaze = () => {
  // Generate starter row (where we start) and the finish row (where the finish point is)
  const starterRow = [0];
  const finishRow = [0];

  for (let x = 1; x < 12; x++) {
    const randomNum = Math.round(Math.random());
    if (x === 11) {
      starterRow.push(1);
      finishRow.unshift(1);
    } else {
      starterRow.push(randomNum);
      finishRow.unshift(randomNum);
    }
  }

  // Append starter and finish row
  const randomIndex1 = Math.round(Math.random() * 7);
  const randomIndex2 = Math.round(Math.random() * 7);
  mazeMap.splice(randomIndex1, 0, starterRow);
  mazeMap.splice(randomIndex2, 0, finishRow);

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
