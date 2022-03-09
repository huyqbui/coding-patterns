/*

Write a function 'canSum(targetSum, numbers)' 
that takes in a targetSum and an array of numbers as an argument.

The function should return a boolean indicating
whether or not it is possible to generate
the targetSum using numbers from the array.

You may use an element of the array as many times as needed.
You may assume that all input numbers are non negative.

*/

// Time: O(mn) | Space: O(m)
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  // targetSum of 0 will always be true
  table[0] = true;
  
  for (let i = 0; i <= targetSum; i++) {
    console.log(table[i])
    if (table[i] === true) {
      for (let num of numbers) {
        if (table[i + num] <= targetSum) table[i + num] = true;
      }
    }
  }
  console.log(table)
  return table[targetSum];
}

console.log(canSum(7, [5, 3, 4, 7])) // -> true

