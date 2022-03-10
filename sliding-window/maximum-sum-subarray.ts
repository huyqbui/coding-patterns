/*
Given an array of positive numbers and a positive number ‘k,’ 
find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

// Time: O(n) | Space: O(1)
const maxSumSubarray = (k: number, arr: number[]) => {
  // inputs: array of numbers, 'k' number
  // output: number = maxSum of any contiguous subarray of k size
  // store ref currSum, maxSum, start, end
  let currSum: number = 0, maxSum: number = -Infinity, start: number = 0;
  // iterate through array, adding each number to currSum
  for (let end = 0; end < arr.length; end++) {
    currSum += arr[end];
    // once end is equal to or greater than k - 1, compare currSum to maxSum and take the greater of the two
    if (end >= k - 1) {
    // subtract the arr index of start from currSum, increment start by 1
      maxSum = Math.max(currSum, maxSum);
      currSum -= arr[start];
      start++;
    }
  }
  // return maxSum
  return maxSum;
}

const newArr: number[] = Array.from(Array(10000000).keys())
console.log(newArr)
console.log(maxSumSubarray(3, [2, 1, 5, 1, 3, 2])) // -> 9
console.log(maxSumSubarray(2, [2, 3, 4, 1, 5])) // -> 7
console.log(maxSumSubarray(100, newArr)) // -> 999994950

