/*
Given an array containing 0s and 1s, 
if you are allowed to replace no more than ‘k’ 0s with 1s, 
find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/
const longestSubstringLength2 = function(arr: number[], k: number) {
  // store ref to start, maxLen, numOnesCount, windowSize
  let start = 0,
    maxLen = 0,
    numOnesCount = 0,
    windowSize = 0

  // iterate through nums in array, incrementing numOnesCount if num is 1
  for (let end = 0; end < arr.length; end++) {
    const num = arr[end];
    if (num === 1) numOnesCount += 1;
    
    windowSize = end - start + 1

    // check if remaining nums in windowSize > k, and shrink window if so
    if (windowSize - numOnesCount > k) {
      if (arr[start] === 1) numOnesCount -= 1;
      start += 1;
      windowSize -= 1;
    }
     // reassign maxLen to max between itself & windowSize
    maxLen = Math.max(maxLen, windowSize)
  }
  return maxLen;
};

console.log(longestSubstringLength2([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)) // -> 6
console.log(longestSubstringLength2([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)) // -> 9