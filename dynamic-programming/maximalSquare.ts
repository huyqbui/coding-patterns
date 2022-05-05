/*
Given an m x n binary matrix filled with 0's and 1's, 
find the largest square containing only 1's and return its area.
Example 1:
  Input: matrix = [
    [ 1 , 0 , 1 , 0 , 0 ],
    [ 1 , 0 , 1 , 1 , 1 ],
    [ 1 , 1 , 1 , 1 , 1 ],
    [ 1 , 0 , 0 , 1 , 0 ]]
  Output: 4
*/

// Time: O(mn) to check each cell in matrix once
// Space: O(n) to store an array of values
const maximalSquare = (matrix: number[][]) => {
  // create a largest square count variable
  // create one array to store the values of our curr, leftOne, and prev
  // iterate through matrix, and look for 1's
  // create a temp copy of arr[i] to swap for later
  // store the min of currVal, leftVal, prevVal & update largest count
  let largestCount = 0;

  let col = matrix.length,
    row = matrix[0].length;

  const arr = Array(row + 1).fill(0);

  let leftVal,
    prevVal = 0;
  for (let c = 1; c <= col; c++) {
    for (let r = 1; r <= row; r++) {
      let temp = arr[r];
      if (matrix[c - 1][r - 1] === 1) {
        leftVal = arr[r - 1];
        arr[r] = Math.min(arr[r], leftVal, prevVal) + 1;
        largestCount = Math.max(largestCount, arr[r]);
      } else arr[r] = 0;
      prevVal = temp;
    }
  }
  return largestCount * largestCount;
};

const matrix = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];

console.log(maximalSquare(matrix));

/* NAIVE APPROACH
// create a count variable to keep track of largest square
// iterate through col and rows of matrix
// if a 1 is found, try to find out largest square formed by:
// moving diagonally(right and down), increment colIdx and rowIdx temporarily and
// check whether all elements of that row and column are 1 or not
// if any 0's, exit and update count of largest square

// Time: O((mn)^2) Quadratic. In worst case, we need to traverse the complete matrix for every 1
// Space: O(1). No extra space is used.
const maximalSquareNaive = (matrix: number[][]) => {
  let largestCount = 0;
  let col = matrix.length,
    row = col > 0 ? matrix[0].length : 0;

  for (let c = 0; c < col; c++) {
    for (let r = 0; r < row; r++) {
      let sqLen = 1;
      let flag = true;
      while (sqLen + c < col && sqLen + r < row && flag) {
        for (let t = r; t <= sqLen + r; t++) {
          if (matrix[c + sqLen][t] === 0) {
            flag = false;
            break;
          }
        }
        for (let t = c; t <= sqLen + c; t++) {
          if (matrix[c + sqLen][t] === 0) {
            flag = false;
            break;
          }
        }
        if (flag) sqLen += 1;
      }
      largestCount = Math.max(largestCount, sqLen);
    }
  }
  return largestCount * largestCount;
};

const matrix = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];
console.log(maximalSquareNaive(matrix)) //-> 4
*/

export {};
