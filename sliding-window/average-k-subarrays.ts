/*

Given an array, find the average 
of all subarrays of ‘K’ 
contiguous elements in it.

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Output: [2.2, 2.8, 2.4, 3.6, 2.8]

*/

const arr: number[] = [1, 3, 2, 6, -1, 4, 1, 8, 2];

// Time: O(n) | Space: O(n)
const averageSubarrays = (k: number, array: number[]) => {
  // inputs: an array of numbers, K number
  // output: an array, containing the average of all subarrays of 'K' numbers
  // store ref for currentSum, start pointer, end pointer, output: array
  // edge cases, if k less than 0 or array has no items, return
  if (k < 0 || !array.length) return null;
  let currentSum: number = 0, start:number  = 0, output: number[] = [];
  // iterate through the arr and add numbers to currentSum
  for (let end = 0; end < array.length; end++) {
    currentSum += array[end];
    // once endPointer reaches index of K, then push the average of currentSum / k
    if (end >= k - 1) {
      output.push(currentSum / k);
      // subtract the index of start from currentSum
      currentSum -= array[start];
      // increment start by 1
      start ++;
    }
  }
  // return output
  return output;
}

console.log(averageSubarrays(5, arr)); // -> [2.2, 2.8, 2.4, 3.6, 2.8]