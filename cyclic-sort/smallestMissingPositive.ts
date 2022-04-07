/*
Given an unsorted array containing numbers, 
find the smallest missing positive number in it.

Example 1:
  Input: [-3, 1, 5, 4, 2]
  Output: 3
  Explanation: The smallest missing positive number is '3'

Example 2:
  Input: [3, -2, 0, 1, 2]
  Output: 4

Example 3:
  Input: [3, 2, 5, 1]
  Output: 4
*/

// Time: O(N) | Space: O(1)
const smallestMissingPositive = (nums: number[]) => {
  // use cyclic sort to sort nums, ignore non-positive numbers
  let i = 0;
  while (i < nums.length) {
    // if first number is not at its right index, swap it
    // j keeps track of where nums[i] should be
    let j = nums[i] -1 ; 
    if (nums[i] > 0 && nums[i] !== nums[j])
      [ nums[i], nums[j] ] = [ nums[j], nums[i] ]
    else
      i++;
  }

  // iterate through sorted to find num not in right index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
}

console.log(smallestMissingPositive([-3, 1, 5, 4, 2])) //-> 3
console.log(smallestMissingPositive([3, -2, 0, 1, 2])) //-> 4
console.log(smallestMissingPositive([3, 4, -8, 2, 5, 1])) //-> 6