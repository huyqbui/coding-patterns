/*
Given a set of positive numbers, 
find if we can partition it into two subsets such that the sum of elements in both subsets is equal.

Example 1:
  Input: [1, 2, 3, 4]
  Output: True
  Explanation: The given set can be partitioned into two subsets with equal sum: [1, 4] & [2, 3]

Example 2:
  Input: [1, 1, 3, 4, 7]
  Output: True
  Explanation: The given set can be partitioned into two subsets with equal sum: [1, 3, 4] & [1, 7]

Example 3:
  Input: [2, 3, 4, 6]
  Output: False
  Explanation: The given set cannot be partitioned into two subsets with equal sum.
*/

// Time: O(N * S) where N is total numbers and S is total sum of all the numbers
// Space: O(N * S) where N is total numbers and S is total sum of all the numbers
const equalSumSubset = (nums: number[]) => {
  // find total sum
  const sum = nums.reduce((a, b) => a + b, 0);

  // if sum is odd, we can't have two subsets that are equal so exit
  if (sum % 2 !== 0) return false;

  // try to find a subset of nums that equal half
  const half = sum / 2
  
  // create an array the length of sums to store the values of all our subproblems
  const arr: boolean[] = Array(half + 1).fill(false)

  // fill beginning of our array to start loop
  arr[0] = true;

  // process all subsets for all sums;
  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i];
    for (let h = half; h >= num; h--) {
      if (arr[h]) {
        arr[h] = true
      } else if (h >= num) {
        arr[h] = arr[h - num]
      }
    }
  }
  return arr[half]
};

console.log(equalSumSubset([1, 2, 3, 4])); //-> true
console.log(equalSumSubset([1, 1, 3, 4, 7])); //-> true
console.log(equalSumSubset([2, 3, 4, 7])); //-> false
console.log(equalSumSubset([1])); //-> false

export {}
