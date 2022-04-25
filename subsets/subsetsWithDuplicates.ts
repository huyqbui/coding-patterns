/*
Given a set of numbers that might contain duplicates, 
find all of its distinct subsets.

Example 1:
  input: [1, 3, 3]
  output: [ [], [1], [3], [1,3], [3,3], [1,3,3] ]
Example 2:
  input: [1, 5, 3, 3]
  output: [ [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,3,3,5] ]
*/

/* Time: O(N * 2^N) since number of subsets double as we 
      add each num to all existing subsets.
      We also construct a new subset from an existing set.
   Space: O(N * 2^N) for the output list since we will have total of O(2^N) subsets,
      and each subset can take up O(N) space.
*/
const subsetsWithDuplicates = (nums: number[]) => {
  // sort the nums
  nums = nums.sort((a, b) => a - b);
  // create a local result array
  const result: number[][] = [];
  // backtrack approach w/helper function(stackArray, idx)
  backTrack([], 0);
  return result;

  function backTrack(stack: number[], idx: number) {
    // spread stackArray & push into result
    result.push([...stack]);
    // iterate while idx less than nums
    for (let i = idx; i < nums.length; i++) {
      // if nums[i] = nums[i - 1] continue
      const numIsDuplicate = nums[i] === nums[i - 1];

      if (numIsDuplicate && i > idx) continue;
      // push nums[i] into stackArray
      // recursively call backtrack w/ stack, increment idx
      // pop last element from stack
      stack.push(nums[i]);
      backTrack(stack, i + 1);
      stack.pop();
    }
  }
};

// console.log(subsetsWithDuplicates([1, 3, 3]));
//-> [ [], [1], [3], [1,3], [3,3], [1,3,3] ]
console.log(subsetsWithDuplicates([1, 5, 3, 3]));
// ->[ [], [1], [1,3], [1,3,3], [1,3,3,5], [1,3,5], [1,5], [3], [3,3], [3,3,5], [3,5], [5] ]
