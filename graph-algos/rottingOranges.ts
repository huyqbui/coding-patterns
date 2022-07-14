/*

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
  Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
  Output: 4

Example 2:
  Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
  Output: -1
  Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
  Input: grid = [[0,2]]
  Output: 0
  Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
*/


// Time: O(m * n)
// Space: O(m * n)
const orangesRotting = (grid: number[][]) => {
  const ROWS = grid.length, COLS = grid[0].length;
  const directions = [ [1,0], [-1,0], [0,1], [0,-1] ];
  let time = 0, fresh = 0;
  
  const q: any = [];
  
  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          switch(grid[r][c]) {
              case 1:
                  fresh += 1;
                  break;
              case 2:
                  q.push([r,c]);
                  break;
          }
      }
  }
  
  while (q.length && fresh > 0) {
      let size = q.length;
      
      for (let i = 0; i < size; i++) {
          const [r, c] = q.shift();
          
          for (const [x,y] of directions) {
              turnRotten(r + x, c + y);
          }
      }
      time++;
  }
  
  return fresh === 0 ? time : -1;
  
  function turnRotten(row: number, col: number) {
      const outOfBounds = row < 0 || row >= ROWS || col < 0 || col >= COLS;
      if (outOfBounds || grid[row][col] !== 1)
          return;
      grid[row][col] = 2;
      fresh -= 1;
      q.push([row, col]);
  }
};

const grid1: number[][] = [[2,1,1],[1,1,0],[0,1,1]]
const grid2: number[][] = [[2,1,1],[0,1,1],[1,0,1]]
const grid3: number[][] = [[0, 2]]

console.log(orangesRotting(grid1))
console.log(orangesRotting(grid2))
console.log(orangesRotting(grid3))

export {}
