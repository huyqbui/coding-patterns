/*
Given an array of positive numbers and a positive number ‘S,’ 
find the length of the smallest contiguous subarray whose sum 
is greater than or equal to ‘S’. Return 0 if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].

*/

const smallestSubarraySum = (s: number, arr: number[]) => {
  // inputs: number 's', array of numbers
  // output: a number value of the smallest contiguous subarray length whose sum is >= s
  // output: return 0 if no subarray exists

  // edge cases: if s <= 0, or array is empty, return 0
  if (s <= 0 || !arr.length) return 0;

  // store ref to currSum, smallestWindow, start, end
  let currSum: number = 0, 
    smallestWindow: number = Infinity, 
    start: number = 0;
  // iterate through arr nums, adding num to currSum
  for (let end = 0; end < arr.length; end++) {
    currSum += arr[end];
    // while currSum >= s, compare length of smallestWindow with curr window(start - end)
    while (currSum >= s) {
      let currWindow: number = end - start + 1
      smallestWindow = Math.min(smallestWindow, currWindow);
      // subtract arr index of start from currSum, and increment start
      currSum -= arr[start];
      start++;
    }
  }
  if (smallestWindow === Infinity) return 0;
  // return smallestWindow
  return smallestWindow;
}

console.log(smallestSubarraySum(7, [2, 1, 5, 2, 3, 2])) // -> 2
console.log(smallestSubarraySum(8, [3, 4, 1, 1, 6])) // -> 3
