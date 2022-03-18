/*

Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) 
such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

*/

// Time: Linear O(n) where n = elements in arr | Space: Constant O(1) 
const targetSum = function(arr: number[], targetSum: number) {
  // store ref to start, end, currSum
  let start: number = 0, end: number = arr.length - 1, currSum: number = 0
  // iterate through arr while start is less than end
  while (start < end) {
  // get currSum for arr[start] + arr[end]
  currSum = arr[start] + arr[end]
  // if arr[start] + arr[end] equals target_sum return [start, end]
  if (currSum === targetSum) return [start, end]
  // if currSum > targetSum, decrement end
  if (currSum > targetSum) end --
  // else decrement start
  if (currSum < targetSum) start++
  }
  return [];
}

console.log(targetSum([1, 2, 3, 4, 6], 6)) // -> [1, 3]