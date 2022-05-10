/*
Given an integer array nums, 
return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array 
by deleting some or no elements without changing the order of the remaining elements. 
For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:
  Input: nums = [10,9,2,5,3,7,101,18]
  Output: 4
  Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
  Input: nums = [0,1,0,3,2,3]
  Output: 4

Example 3:
  Input: nums = [7,7,7,7,7,7,7]
  Output: 1
*/

// Time: O(N^2) due to the nested for loops
// Space: O(N) to store the array of values
const LIS = (nums: number[]) => {
  // create an array to store the best possible value when subsequence ends at index i
  // create a longest variable to keep track of longest subsequence
  const arr = [1]
  let longest = 1;

  // create a for loop to iterate through each num in nums
    // create another loop to check each subsequence element where nums[j] < nums[i]
      // update arr[i] to store highest length of subsequence possible
      // update longest
  for (let i = 0; i < nums.length; i++) {
    arr[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[j] + 1);
        longest = Math.max(longest, arr[i]);
      }
    }
  }
  return longest;
}

console.log(LIS([0,1,0,3,2,3])) //-> 4
console.log(LIS([10,9,2,5,3,7,101,18])) //-> 4
console.log(LIS([7,7,7,7,7,7,7])) //-> 1