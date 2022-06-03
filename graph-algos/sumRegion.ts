/*
Calculate the sum of the elements of matrix inside the rectangle defined 
by its upper left corner (topRow, topCol) and lower right corner (lowRow, lowCol).

example:
  matrix: 
      c0  1  2  3  4

  r0  [3, 0, 1, 4, 2], 
  r1  [5, 6, 3, 2, 1], 
  r2  [1, 2, 0, 1, 5], 
  r3  [4, 1, 0, 1, 7], 
  r4  [1, 0, 3, 0, 5]


  sumRegion: [2, 1, 4, 3] // topRow: 2, topCol:1, lowRow:4, lowCol:3
    output: 8
    explanation: 2 + 0 + 1 + 1 + 0 + 1 + 0 + 3 + 0 = 8

  sumRegion: [1, 1, 2, 2] // topRow: 1, topCol:1, lowRow:2, lowCol: 2
    output: 11
    explanation: 6 + 3 + 2 + 0 = 11
*/

// Time: O(n^2) due to the nested loop
// Space: O(1) constant
const sumRegion = (matrix: number[][], sumRegion: number[]) => {
  const [topRow, topCol, lowRow, lowCol ] = sumRegion;
  let totalSum = 0;
  for (let i = topRow; i <= lowRow; i++) {
    for (let j = topCol; j <= lowCol; j++) {
      totalSum += matrix[i][j];
    }
  }
  return totalSum;
}

const matrix = [
  [3, 0, 1, 4, 2], 
  [5, 6, 3, 2, 1], 
  [1, 2, 0, 1, 5], 
  [4, 1, 0, 1, 7], 
  [1, 0, 3, 0, 5],
]

console.log(sumRegion(matrix, [2, 1, 4, 3])) //-> 8
console.log(sumRegion(matrix, [1, 1, 2, 2])) //-> 11
console.log(sumRegion(matrix, [1, 2, 2, 4])) //-> 12