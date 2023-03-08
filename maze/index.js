const mazeContainer = document.getElementById('mazeContainer');

const mazeMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

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
