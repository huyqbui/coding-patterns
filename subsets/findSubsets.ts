/*

Given a set with distinct elements, find all of its distinct subsets.

Example 1:
  input: [1, 3]
  output: [[],[1],[3],[1,3]]

Example 2:
  Input: nums = [1,2,3]
  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] 
*/

const findSubsets = (nums: number[]) => {
  // create local result array
  const result: number[][] = []
  // use backtrack approach w/ helper function(stack, index)
  // return result
  backTrack([], 0)
  return result;
  function backTrack(stack: number[], index: number) {
    // spread the stack and push it into result
    result.push([...stack])
    // use for loop to iterate while index less than nums length
    for (let i = index; i < nums.length; i++) {
      // push into stack the curr num
      // backtrack passing in stack, and increment i
      // pop the last item from stack
      stack.push(nums[i])
      backTrack(stack, i + 1)
      stack.pop()
    }
  }
}

console.log(findSubsets([1, 3])) 
  //-> [[],[1],[3],[1,3]]
console.log(findSubsets([1, 2, 3])) 
  //-> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] 