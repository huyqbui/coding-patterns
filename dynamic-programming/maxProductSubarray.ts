/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.

Example 1:
  Input: nums = [2,3,-2,4]
  Output: 6
  Explanation: [2,3] has the largest product 6.

Example 2:
  Input: nums = [-2,0,-1]
  Output: 0
  Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

// Time: O(n)
// Space: O(1)
const maxProductSubarray = (nums: number[]): number => {
  let result = 0;
  let len = nums.length    
  let currMin = 1, currMax = 1; // assign base cases
  
  for (let i = 0; i < len; i++) {
      let num = nums[i];
      let newMax = Math.max(num, num * currMax, num * currMin);
      let newMin = Math.min(num, num * currMax, num * currMin);      
      currMax = newMax;
      currMin = newMin;
      result = Math.max(result, currMax);
  }
  return result;
}

const nums1 = [2,3,-2,4]
const nums2 = [-2,0,-1]

console.log(maxProductSubarray(nums1)) //-> 6
console.log(maxProductSubarray(nums2)) //-> 0


export {}