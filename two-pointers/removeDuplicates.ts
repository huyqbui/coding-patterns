/*

Given an array of sorted numbers, remove all duplicates from it. 
You should not use any extra space; 
after removing the duplicates in-place return the length of the subarray 
that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/

// Time: Linear O(n) where n = arr elements | Space: constant O(1)
const removeDuplicates = function(arr: number[]) {
  // store pointer1 and pointer2
  let nextNonDuplicate: number = 1, index: number = 0;
  // iterate through arr using index
  while (index < arr.length) {

  let currNum: number = arr[index];
  // if currNum is not equal to nextNonDuplicate - 1, reassign arr[nextNonDuplicate]'s value to currNum, increment nextNonDuplicate
  let prevNum: number = nextNonDuplicate - 1;
  if (arr[prevNum] !== currNum) {
    arr[nextNonDuplicate] = currNum;
    nextNonDuplicate++;
  }
  // otherwise increment index
  index++;
  }
  return nextNonDuplicate;
};

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])) // -> 4
console.log(removeDuplicates([2, 2, 2, 11])) // -> 2
