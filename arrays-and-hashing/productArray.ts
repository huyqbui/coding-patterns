/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]

Example 2:
  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]
*/

// Time: O(N) where N is length of nums
// Space: O(1) constant
const productExceptSelf = (nums: number[]) => {
  const result = [1];

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  let r = 1;
  let i = nums.length - 1;
  while (i >= 0) {
    result[i] = r * result[i];
    r = r * nums[i];
    i--;
  }
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])) //-> [24, 12, 8, 6]