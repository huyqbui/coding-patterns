/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are some valid subarrays of [3, 11, 2, 7, 4]
  [3, 11, 2]
  [11, 2, 7]
  [2]
  [3, 11, 2, 7, 4]
)
Find the subarray with the largest sum from the input array.
e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input); 
// returns 18 from subarray [3, 10, -4, 7, 2]
input2 = [15, 20, -5, 10]
maxSubarray(input2); 
// returns 40 from subarray [15, 20, -5, 10] (edited) 
*/

// My version of Kadane's algorithm
// TIME: 0(n) - loop through input array once
// SPACE: 0(1) - memory does not scale based on input
const maxSubarray = (input: number[]) => {
  // keep track of current sum and max sum and set to -Infinity
  let currSum = -Infinity;
  let maxSum = -Infinity;
  // restart currSum at 0 if it falls below 0, using Math.max
  // add the current num to currSum
  // maxSum will be max of maxSum or currSum
  for (let i = 0; i < input.length; i++) {
    let num = input[i]; 
    currSum = Math.max(0, currSum); 
    currSum += num;
    maxSum = Math.max(maxSum, currSum); 
  }
  return maxSum;
};

console.log(maxSubarray([15, 20, -5, 10])) //-> 40
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) //-> 18

const arr1: number[] = [1, 3, 5, 7]
const arr2: number[] = [0, 2, 6, 8, 9]

console.log([...arr1, ...arr2].sort((a, b) => a- b))