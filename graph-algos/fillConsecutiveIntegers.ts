/*
You’re given an N * N array, and asked to fill it with consecutive
integers, starting with 1 in the center cell, then moving down one
to put a 2, then left to put a 3, up to put 4 and then 5, then right
for 6 and 7, and so on until you’ve filled the array.

Example: 
  7x7:
  .  .  .  .  .  .  .
  .  .  .  .  .  .  .
  .  .  5  6  7  .  .
  .  .  4  1  8  .  .
  .  .  3  2  9  .  .
  .  .  . <- 10  .  .
  .  .  .  .  .  .  49

*/

// Time: O(n^2) to fill every element in the n * n grid
// space: O(n^2) to store all the recursive calls of fillArray
const fillConsecutiveIntegers = (n: number) => {

  // create array with 0's to fill for later
  const array = Array(n).fill(0)
    .map(x => Array(n).fill(0));
  let num = n * n;
  fillArray(n - 1, n - 1, num, 'up');

  return array;

  // fill the array starting from the bottom right
    // move up until we reach beg of row, or if the spot in array is already filled with a num
      // change dir to left, and move left one col
    // move left until we reach beg of col, or if the spot in array is already filled with a num
      // change dir to down, and move down one row
    // move down until we reach end of row, or if the spot in array is already filled with a num
      // change dir to right, and move right one col
    // move right until we reach end of col, or if the spot in array is already filled with a num
      // change dir to up, and move up one row
  function fillArray(row: number, col: number, count: number, dir: string) {
    const size = n - 1;
    array[row][col] = count;
    
    if (dir === 'up') {
      if (row === 0 || array[row - 1][col] !== 0) {
        dir = 'left';
        col -= 1;
      } else {
        row -= 1;
      }
    } else if (dir === 'down') {
      if (row === size || array[row + 1][col] !== 0) {
        dir = 'right';
        col += 1;
      } else {
        row += 1;
      }
    } else if (dir === 'left') {
      if (col === 0 || array[row][col - 1] !== 0) {
        dir = 'down';
        row += 1;
      } else {
        col -= 1;
      }
    } else if (dir === 'right') {
      if (col === size || array[row][col + 1] !== 0) {
        dir = 'up';
        row -= 1;
      } else {
        col += 1;
      }
    }

    count -= 1;

    if (count >= 1)
      fillArray(row, col, count, dir);
  }
};

console.log(fillConsecutiveIntegers(7));
/*
[ 
  [ 37, 38, 39, 40, 41, 42, 43 ],
  [ 36, 17, 18, 19, 20, 21, 44 ],
  [ 35, 16,  5,  6,  7, 22, 45 ],
  [ 34, 15,  4,  1,  8, 23, 46 ],
  [ 33, 14,  3,  2,  9, 24, 47 ],
  [ 32, 13, 12, 11, 10, 25, 48 ],
  [ 31, 30, 29, 28, 27, 26, 49 ] 
]
*/
