/*
We are given an array containing n distinct numbers taken from the range 0 to n. 
Since the array has only n numbers out of the total n+1 numbers, find the missing number.

Example 1:
  Input: [4, 0, 3, 1]
  Output: 2

Example 2:
  Input: [8, 3, 5, 2, 4, 6, 0, 1]
  Output: 7
*/

// Time: O(N) || Space: O(1)
const findMissingNumber = (nums: number[]) => {
  // iterate through nums, store pointer for nums[i] - 1
  // if current num is not equal to num at pointer, swap them
  // iterate through sorted nums, and find missing num
  let i = 0;
  while (i < nums.length) {
    let j = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[j])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else i++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
};

console.log(findMissingNumber([4, 0, 3, 1])); //-> 2
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1])); //-> 2
