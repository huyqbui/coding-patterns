/*

We have a m x n 2D grid initialized with three possible values:
-1 - An obstacle.
0 - An exit.
INF - An empty room. We use the value 2^31 - 1 = 2147483647 
to represent INF as you may assume that the distance to an exit is less than 2147483647.

We want to fill each empty room with the distance to its nearest exit. 
If it is impossible to reach an exit, it should be filled with INF.

Example:
Given the 2D grid:
[
  [INF -1   0  INF],
  [INF INF INF  -1],
  [INF -1  INF  -1],
  [0   -1  INF INF]
]
We expect the output 2D grid as:
[
  [3, -1, 0,  1],
  [2,  2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3,  4]
]
*/

const INF = 2147483647;

// DFS approach w/out using a visited set
// Time: O(N^2) | Space: O(N)
const shortestPathToExitDFS = (grid) => {
  // handle edge cases
  if (grid === null || grid.length === 0) return;
  // traverse the grid's rows and columns
  // use a helper function to do dfs and count distance to path every time we encounter a 0
  const columns = grid.length;
  const rows = grid[0].length;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 0) {
        countDistance(grid, i, j, 0);
      }
    }
  }
  return grid;

  // helper function will take in the grid, i pos, j pos, distance
  function countDistance(grid, i, j, distance) {
    // check to make sure we stay in bounds, and return if we hit an obstacle, or already visited a room
    let outColumnBounds = i < 0 || i >= columns;
    let outRowBounds = j < 0 || j >= rows;
    if (
      outColumnBounds ||
      outRowBounds ||
      grid[i][j] == -1 ||
      distance > grid[i][j] // avoid looping of already visited rooms
    )
      return;

    // reassign the grid pos to be the distance
    grid[i][j] = distance;

    // recursively call the function on its neighbors, passing in distance + 1
    const neighbors = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (const [x, y] of neighbors) {
      countDistance(grid, i + x, j + y, distance + 1);
    }
  }
};

const grid = [
  [INF,  -1,    0, INF],
  [INF, INF,  INF,  -1],
  [INF,  -1,  INF,  -1],
  [  0,  -1,  INF, INF]
];

console.log(shortestPathToExitDFS(grid));


// BFS approach by implementing a queue
// Time: O(N^4) | Space: O(N)
const shortestPathToExitBFS = (grid) => {
  // handle edge cases
  if (grid === null || grid.length === 0) return;

  const queue = [];
  const neighbors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // traverse the grid's rows and columns
  // when we find a 0, we'll push its coordinates into the queue
  const columns = grid.length;
  const rows = grid[0].length;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  // while there are coordinates in queue, remove the first in queue
  while (queue.length) {
    let [queueX, queueY] = queue.shift();
    for (let [x, y] of neighbors) {
      x = queueX + x;
      y = queueY + y;
      // check if we are in bounds of our grid
      if (
        x < 0 ||
        x >= columns ||
        y < 0 ||
        y >= rows ||
        grid[x][y] <= grid[queueX][queueY] + 1
      )
        continue;

      // reassign current grid pos value to be queue's grid value incremented by 1
      grid[x][y] = grid[queueX][queueY] + 1;

      // push each neighbor into the queue
      queue.push([x, y]);
    }
  }
  return grid;
};

/*
const grid = [
  [INF,  -1,    0, INF],
  [INF, INF,  INF,  -1],
  [INF,  -1,  INF,  -1],
  [  0,  -1,  INF, INF]
];
*/
console.log(shortestPathToExitBFS(grid));
