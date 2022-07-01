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

// create a result array to store calculated prefix & postfix values
// iterate through nums and calculate each prefix of a num and store in result
// iterate backwards through nums and calculate each postfix of a num and update result

// Time: O(N) where N is length of nums
// Space: O(1) constant
const productExceptSelf = (nums: number[]) => {
  const result = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  let postfix = 1;
  let i = nums.length - 1;
  while (i >= 0) {
    result[i] = postfix * result[i];
    postfix = postfix * nums[i];
    i--;
  }
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])) //-> [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])) //-> [0, 0, 9, 0, 0]