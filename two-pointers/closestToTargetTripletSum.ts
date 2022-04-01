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
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let currNum: number  = arr[i], 
      left: number = i + 1, 
      right: number = arr.length -1;
    // establish pointers, then grab sum of target minus the triplet
    while (left < right) {
      let sum = currNum + arr[left] + arr[right];
      // if sum - target is less than our closestSum - target, we reassign closestSum
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


// Extension: Write a function to return the list of all such triplets instead of the count. 
// How will the time complexity change in this case?

// Time: O(N^3) due to the nested loops | Space: O(N) due to sorting the array
const closestToTargetTripletSumList = (arr: number[], target: number) => {
  // store and track  list of triplets
  const triplets: number[][] = [];
  // sort the arr, then iterate through each num in arr
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let currNum: number  = arr[i], 
      left: number = i + 1, 
      right: number = arr.length -1;
    // establish pointers, then grab sum of target minus the triplet
    while (left < right) {
      let sum = currNum + arr[left] + arr[right];
      // if sum less than target, then we can push in all our triplets
      if (sum < target) {
        for (let j = right; j > left; j--) {
          triplets.push([arr[i], arr[left], arr[j]])
        }
        // move left or right pointer depending on if sum greater than 0 or not
        left++;
      }
      else right--;
    }
  }
  return triplets;
};

console.log(closestToTargetTripletSumList([-1, 0, 2, 3], 3));
  // -> [ [-1, 0, 3], [-1, 0, 2] ]
console.log(closestToTargetTripletSumList([-1, 4, 2, 1, 3], 5));
  // -> [ [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3] ]




