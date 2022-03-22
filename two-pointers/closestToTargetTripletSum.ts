/*

Given an array of unsorted numbers and a target number, 
find a triplet in the array whose sum is as close to the target number as possible, 
return the sum of the triplet. 
If there are more than one such triplet, 
return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

*/
// Time: O(N * logN) due to sorting array | Space: O(N) from sorting
const closestToTargetTripletSum = (arr: number[], target: number) => {
  // store and track closestSum;
  let closestSum: number = Infinity;
  // sort the arr, then iterate through each num in arr
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let currNum: number  = arr[i], 
      left: number = i + 1, 
      right: number = arr.length -1;
    // establish pointers, then grab sum of target minus the triplet
    while (left < right) {
      let sum = currNum + arr[left] + arr[right];
      // if abs value of sum < abs value of closest or sum > closest, reassign closest
      let closestCheck = (Math.abs(sum - target) < Math.abs(closestSum - target));
      if (closestCheck) closestSum = sum;

      // move left or right pointer depending on if sum greater than 0 or not
      if (sum > target) right--;
      else left++;
    }
  }
  return closestSum;
};

console.log(closestToTargetTripletSum([-2, 0, 1, 2], 2)) //-> 1
console.log(closestToTargetTripletSum([-3, -1, 1, 2], 1)) //-> 0
console.log(closestToTargetTripletSum([1, 0, 1, 0, 1], 100)) //-> 3


