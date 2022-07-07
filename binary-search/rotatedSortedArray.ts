/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an 
unknown pivot index k (1 <= k < nums.length) such that the resulting array is 
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

Example 3:
  Input: nums = [1], target = 0
  Output: -1


                  L 
                  R
                    M
  nums = [4,5,6,7,0,1,2]
*/

// Time: O(log n) due to binary search
// Space: O(1) constant
const searchRotatedSortedArray = (nums: number[], target: number) => {
  // create vars for left, right, and iterate while left <= right
    // get the middleNum, and return index if middleNum equal to target
    // check if left side is sorted by comparing left num & middle num
      // if leftNum <= target, and target <= middleNum
        // update right to be mid - 1
        // else update left to mid + 1
    // else right side is sorted
      // if middleNum <= target, and target <= rightNum
        // update left to be mid + 1
        // else update right to be mid - 1;
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)) //-> 4
console.log(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)) //-> -1
console.log(searchRotatedSortedArray([1], 0)) //-> -1
