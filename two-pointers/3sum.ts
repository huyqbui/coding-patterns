/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]

Example 2:
  Input: nums = []
  Output: []

Example 3:
  Input: nums = [0]
  Output: []
 
Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums: number[]) {
  if (nums.length < 3) return [];
  // create output array
  const output: number[][] = [];

  // sort the nums then iterate through it
  const newNums = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < newNums.length; i++) {
    if (newNums[i] > 0) return output; // exit early if rest of nums are > 0
    if (i > 0 && newNums[i] === newNums[i-1]) continue; // skip loop if num is same as prev

    // create pointers for left and right
    let L = i + 1;
    let R = newNums.length - 1;

    while (L < R) {
      // while iterating through each num, add sum of i, L, R
      const currSum = newNums[i] + newNums[L] + newNums[R];
      
      // if sum < 0, move L pointer. if sum > 0, move R pointer
      // if sum = 0 push [i,L,R] to output
      if (currSum > 0) R--;
      if (currSum < 0) L++;
      if (currSum === 0) {
        output.push([newNums[i], newNums[L], newNums[R]]);
        L++;
        R--;
        while (newNums[L] === newNums[L-1]) L++; // skip over same nums
        while (newNums[R] === newNums[R+1]) R--; // skip over sam nums
      }
    }
  }
  return output;
};

const nums = [-1, 0, 1, 2, -1, -4];
const nums2: number[] = [];
const nums3 = [0];
const nums4 = [-5, 2, -1, -2, 3];
const nums5 = [-3, 0, 1, 2, -1, 1, -2];

console.log(threeSum(nums)); //-> [ [-1,-1,2], [-1,0,1] ]
console.log(threeSum(nums2)); //-> []
console.log(threeSum(nums3)); //-> []
console.log(threeSum(nums4)); //-> [[-5, 2, 3], [-2, -1, 3]]
console.log(threeSum(nums5)); //-> [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]

export {}
