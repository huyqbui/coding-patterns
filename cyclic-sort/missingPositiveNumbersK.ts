/*
Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.

Example 1:
  Input: [3, -1, 4, 5, 5], k=3
  Output: [1, 2, 6]
  Explanation: The smallest missing positive numbers are 1, 2 and 6.

Example 2:
  Input: [2, 3, 6], k=4
  Output: [1, 4, 5, 7]
  Explanation: The smallest missing positive numbers are 1, 4, 5, and 7.

Example 3:
  Input: [-2, -3, 4], k=2
  Output: [1, 2]
  Explanation: The smallest missing positive numbers are 1 and 2.
*/

const missingPositiveNumbersK = (nums: number[], k: number) => {
  // use a cyclic sort, ignore non-positive numbers
  let i = 0,
    n = nums.length;
  while (i < n) {
    // keep track of where nums[i] should be if not in right place
    let j = nums[i] - 1; 
    // swap nums
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else i++;
  }

  // iterate through sorted:
  //  - if number does not match right index, we are missing that number
  //  - also need to keep track of numbers we already have
  const missingNums = [],
    alreadyHasNums = new Set();
  for (let i = 0; i < n; i++) {
    if (missingNums.length < k) {
      if (nums[i] !== i + 1) {
        missingNums.push(i + 1);
        alreadyHasNums.add(nums[i]);
      }
    }
  }

  // while missingNums is less than k, find remaining numbers 
  i = 1;
  while (missingNums.length < k) {
    const possibleNum = i + n;
    if (!alreadyHasNums.has(possibleNum)) {
      missingNums.push(possibleNum);
    }
    i++;
  }
  return missingNums;
};

console.log(missingPositiveNumbersK([3, -1, 4, 5, 5], 3)) //-> [1, 2, 6]
console.log(missingPositiveNumbersK([2, 3, 6], 4)); //-> [1, 4, 5, 7]
console.log(missingPositiveNumbersK([-2, -3, 4], 2)); //-> [1, 2]
