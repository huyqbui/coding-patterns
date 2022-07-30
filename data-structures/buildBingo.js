/*

Create a Bingo Board grid of 5 x 5, containing unique numbers.
In addition to each number being unique, make sure that the numbers in each letter column follow these rules:

Letter B: numbers must be between 1-15, and 2nd & 4th numbers are odd.
Letter I: numbers must be between 16-30, and numbers are descending.
Letter N: numbers must be between 31-45, and numbers are random.
Letter G: numbers must be between 46-60, and numbers are ascending.
Letter O: numbers must be between 61-75, and 1st & 5th numbers even.

The middle position of the Bingo Board should be a '*' to represent a wildcard.

  B I N G O
  - - - - - 
  - - - - - 
  - - * - - 
  - - - - - 
  - - - - - 
*/
const arrayVals = (start, end) =>
  Array.from({ length: end + 1 - start }, (_, idx) => idx + start);
const genRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function genBingoBoard() {
  let Bvals = arrayVals(0, 15);
  let Nvals = arrayVals(0, 45);
  let Ovals = arrayVals(0, 75);
  let prevNum;

  const board = Array(5)
    .fill()
    .map((item) => Array(5).fill(0));

  for (let c = 0; c < board.length; c++) {
    genColNums(c, 0);
  }

  board[2][2] = '*';

  return board;

  function genColNums(col, row) {
    let num, random;

    const isOddRows = row === 1 || row === 3;
    const firstAndFifthNum = row === 0 || row === 4;

    if (col === 0) {
      if (isOddRows) {
        const oddNums = Bvals.filter((num) => num % 2 !== 0);
        random = genRandom(1, oddNums.length - 1);
        num = oddNums[random];
      } else {
        random = genRandom(1, Bvals.length - 1);
        num = Bvals[random];
      }
      board[row][col] = num;
      Bvals = Bvals.filter((el) => el !== num);
    } else if (col === 1) {
      if (row === 0) {
        random = genRandom(20, 30);
      }
      num = prevNum || random;
      board[row][col] = num;
      prevNum = --num;
    } else if (col === 2) {
      random = genRandom(31, Nvals.length - 1);
      num = Nvals[random];
      board[row][col] = num;
      Nvals = Nvals.filter((el) => el !== num);
    } else if (col === 3) {
      if (row === 0) {
        prevNum = undefined;
        random = genRandom(46, 56);
      }

      num = prevNum || random;
      board[row][col] = num;
      prevNum = ++num;
    } else if (col === 4) {
      if (firstAndFifthNum) {
        const evenNums = Ovals.filter((num) => num % 2 === 0 && num > 61);
        random = genRandom(1, evenNums.length - 1);
        num = evenNums[random];
      } else {
        random = genRandom(61, Ovals.length - 1);
        num = Ovals[random];
      }
      board[row][col] = num;
      Ovals = Ovals.filter((el) => el !== num);
    }

    if (row !== 4) {
      genColNums(col, row + 1);
    }
  }
}

console.log(genBingoBoard());
console.log(genBingoBoard());
console.log(genBingoBoard());
