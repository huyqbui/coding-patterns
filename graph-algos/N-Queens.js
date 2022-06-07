/*

The n-queens puzzle is the problem of placing n queens on an 
n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. 
You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, 
where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example:
  n: 4
  output: [
    [
      ". Q . .",
      ". . . Q",
      "Q . . .",
      ". . Q ."
    ],
    [
      ". . Q .",
      "Q . . .",
      ". . . Q",
      ". Q . ."
    ]
  ]
*/

// Time: O(N!) Second queen placed will have N - 2 possibilities, Third queen (N - 4), etc so O(N!)
// Space: O(N^2) For keeping the state of the board which is N * N size.
const solveQueens = (n) => {
  const col = new Set(), diag = new Set(), antiDiag = new Set();
  const result = [];

  const board = Array(n)
    .fill('.')
    .map(x => Array(n).fill('.'));
  
  backTrack(0, n, board, col, diag, antiDiag, result);
  return result;

  function backTrack(rowPos, num, board, colSet, diagSet, antiDiagSet, result) {
    // if nth row is filled return the array
    if (rowPos === num) {
      let copy = [];
      copy = pushToArray(rowPos, num, board);
      result.push(copy);
      return;
    }

    // for every column check if diagPos, antiDiagPos, or column itself is occupied.
    // for diagPos (row + c) is constant
    // for antiDiag (row - c) is constant
    // for checking column, we check value of c

    for (let c = 0; c < n; c++) {
      if (colSet.has(c) || diagSet.has(rowPos + c) || antiDiagSet.has(rowPos - c)) {
        continue;
      }

      colSet.add(c);
      diagSet.add(rowPos + c);
      antiDiagSet.add(rowPos - c);
      board[rowPos][c] = 'Q';

      backTrack(rowPos + 1, n, board, colSet, diagSet, antiDiagSet, result);

      // if prev result is wrong, reverse the steps and repeat process aka backtracking
      colSet.delete(c);
      diagSet.delete(rowPos + c);
      antiDiagSet.delete(rowPos - c);
      board[rowPos][c] = '.';
    }
  }

  function pushToArray(row, n, board) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
        str += board[i][j];
      }
      arr.push(...[str])
    }
    return arr;
  }
}

console.log(solveQueens(4)); //-> [ [ '.Q..', '...Q', 'Q...', '..Q.' ], [ '..Q.', 'Q...', '...Q', '.Q..' ] ]
console.log(solveQueens(3)); //-> []
console.log(solveQueens(1)); //-> [['Q']]