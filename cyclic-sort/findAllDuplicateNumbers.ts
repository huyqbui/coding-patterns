/*
We are given an unsorted array containing n numbers 
taken from the range 1 to n. 
The array has some numbers appearing twice, 
find all these duplicate numbers using constant space.

Example 1:
  Input: [3, 4, 4, 5, 5]
  Output: [4, 5]

Example 2:
  Input: [5, 4, 7, 2, 3, 5, 3]
  Output: [3, 5]
*/

// Time: O(N) | Space: O(1) if ignoring size of duplicates array
const findAllDuplicates = (nums: number[]) => {
  const duplicates: number[] = [];
  // sort the nums using a cyclic sort
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else i++;
  }
  // iterate through sorted nums, and find numbers that aren't in the right pos
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) duplicates.push(nums[i]);
  }
  return duplicates;
};

console.log(findAllDuplicates([3, 4, 4, 5, 5])); // [4, 5]
console.log(findAllDuplicates([5, 4, 7, 2, 3, 5, 3])); // [3, 5]
