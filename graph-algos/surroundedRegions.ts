/*

Given an m x n matrix board containing 'X' and 'O', 
capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:
  Input: board = [
    [X, X, X, X],
    [X, O, O, X],
    [X, X, O, X],
    [X, O, X, X]
  ]
  Output: [
    [X, X, X, X],
    [X, X, X, X],
    [X, X, X, X],
    [X, O, X, X]
  ]
  Explanation: Notice that an 'O' should not be flipped if:
  - It is on the border, or
  - It is adjacent to an 'O' that should not be flipped.
  The bottom 'O' is on the border, so it is not flipped.
  The other three 'O' form a surrounded region, so they are flipped.

*/

// Time: O(m * n) where we dfs travel on any bordering O's, and then go through every cell in board
// Space: O(m * n) where worst case we have to make a travel call on every cell
const surroundedRegions = (board: string[][]) => {
  const ROWS = board.length, COLS = board[0].length;
  const lastRow = ROWS - 1, lastCol = COLS - 1;
  const directions = [ [1, 0], [-1, 0], [0, 1], [0, -1] ]

  for (let r = 0; r < ROWS; r++) {
    travel(r, 0)
    travel(r, lastCol)
  }

  for (let c = 0; c < COLS; c++) {
    travel(0, c);
    travel(lastRow, c);
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      switch(board[r][c]) {
        case 'O':
          board[r][c] = 'X';
          break;
        case 'T':
          board[r][c] = 'O';
          break;
      }
    }
  }
  return board;

  function travel(r: number, c: number) {
    const outOfBounds = r < 0 || r >= ROWS || c < 0 || c >= COLS;
    if (outOfBounds || board[r][c] !== 'O')
      return;
    board[r][c] = 'T'

    for (const [x, y] of directions) {
      travel(r + x, c + y);
    }
  }
}

const board: string[][] = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

console.log(surroundedRegions(board))

export {}