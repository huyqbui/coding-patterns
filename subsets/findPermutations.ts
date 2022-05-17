/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.

Example 1:
  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
  Input: nums = [0,1]
  Output: [[0,1],[1,0]]

Example 3:
  Input: nums = [1]
  Output: [[1]]
*/

const findPermutations = function(nums: number[]) {
  const result: number[][] = [];
  // use a backtrack approach
  backTrack([])
  return result;

  function backTrack(curr: number[]) {
    // only push curr into result if it's the same length as nums
    if (curr.length === nums.length) {
      result.push(curr);
      return;
    }
    for (const num of nums) {
      if (!curr.includes(num)) {
        backTrack([...curr, num])
      }
    }
  }
};

console.log(findPermutations([1, 2, 3])) //-> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(findPermutations([0, 1])) //-> [[0,1],[1,0]]
console.log(findPermutations([1])) //-> [[1]]