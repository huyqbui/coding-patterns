/*
We are given an array containing n objects. Each object, when created, 
was assigned a unique number from the range 1 to n based on their creation sequence. 
This means that the object with sequence number 3 was 
created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n)
and without using any extra space. For simplicity, let’s assume we are passed 
an integer array containing only the sequence numbers, 
though each number is actually an object.

Example 1:
  Input: [3, 1, 5, 4, 2]
  Output: [1, 2, 3, 4, 5]

Example 2:
  Input: [2, 6, 4, 3, 1, 5]
  Output: [1, 2, 3, 4, 5, 6]

Example 3:
  Input: [1, 5, 6, 4, 3, 2]
  Output: [1, 2, 3, 4, 5, 6]
*/

const cyclicSort = (nums: number[]): number[] => {
  // iterate through array
  // store a pointer that will be nums[i] - 1
  // if current num is not equal to num at our pointer, we'll swap them
  // otherwise increment i
  let i = 0,
    j = nums[i] - 1;
  while (i < nums.length) {
    if (nums[i] !== nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    else i++;
  }
  return nums;
};

console.log(cyclicSort([3, 1, 5, 4, 2])); //-> [1, 2, 3, 4, 5]
console.log(cyclicSort([2, 6, 4, 3, 1, 5])); //-> [1, 2, 3, 4, 5, 6]
console.log(cyclicSort([1, 5, 6, 4, 7, 3, 2])); //-> [1, 2, 3, 4, 5, 6, 7]
