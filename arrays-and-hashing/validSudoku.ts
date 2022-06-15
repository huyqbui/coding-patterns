
// Time: O(N^2) due to traversing every position in the board
// Space: O(N^2) due to adding a value to our dict set if every position in board is filled
const isValidSudoku = (board: string[][]): boolean => {
  // create a dict set and constant variables
  // iterate through every position in board, skipping empty cells
  // get the current value in board and the row, col, and box positions
  // if our dict set has these values in their sets, return false;
  // else add to each corresponding set in dict
  // return true if traversed succesfully through board
  
  const ROW = 'R', COL = 'C', BOX = 'B', EMPTY = '.';
  const set = new Set();
  const dict = {
    rows: new Set(),
    cols: new Set(),
    squares: new Set()
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] !== EMPTY) {
        let num = `${board[r][c]}`

        const rowHash = num + ROW + r;
        const colHash = num + COL + c;
        const boxHash = num + BOX + Math.floor(r/3) + Math.floor(c/3);

        if (dict.rows.has(rowHash) || dict.cols.has(colHash) || dict.squares.has(boxHash))
          return false;
        else {
          dict.rows.add(rowHash);
          dict.cols.add(colHash);
          dict.squares.add(boxHash);
        }
      }
    }
  }
  console.log(dict.rows)
  console.log(dict.cols)
  console.log(dict.squares)
  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));
