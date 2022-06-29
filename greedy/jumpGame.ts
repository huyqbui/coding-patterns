/*
You are given an integer array nums. 
You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, 
or false otherwise.

Example 1:
  Input: nums = [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
  Input: nums = [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. 
  Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

// Time: O(N) | Space: O(1)
const jumpGame = (nums: number[]) => {
  // iterate over nums starting from 0, update max to track how far you can jump
  // if max reaches target, then it is possible
  // if max equals our idx, jumping not possible
  let idx = 0,
    max = 0,
    target = nums.length - 1;
    
  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx])
    if (max >= target) return true;
    if (max === idx) return false
    idx++;
  }
  return false;
}

/*

idx = 3;
max = 3;
target = 4;

                               i

*/
console.log(jumpGame([2, 3, 1, 1, 4])) //-> true
console.log(jumpGame([3, 2, 1, 0, 4])) //-> false
console.log(jumpGame([0])) //-> true
console.log(jumpGame([1])) //-> true