/*
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. 
The array has only one duplicate but it can be repeated multiple times. 
Find that duplicate number without using any extra space. 
You are, however, allowed to modify the input array.

Example 1:
  Input: [1, 4, 4, 3, 2]
  Output: 4

Example 2:
  Input: [2, 1, 3, 3, 5, 4]
  Output: 3

Example 3:
  Input: [2, 4, 1, 4, 4]
  Output: 4
*/

// Time: O(N) | Space: O(1)
const findDuplicate = (nums: number[]) => {
  // use cyclic sort to try and sort nums
  // if while swapping, the numbers are the same, then we have our duplicate!
  let i = 0;
  while (i < nums.length) {
    // if number at index not in correct pos, then attempt to swap
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1;
      
      // swap if numbers are not the same, else we found duplicate
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else return nums[j];
    } else i++;
  }
  return -1;
};

console.log(findDuplicate([1, 4, 4, 3, 2])); //-> 4
console.log(findDuplicate([2, 1, 3, 3, 5, 4])); //-> 3
console.log(findDuplicate([8, 1, 3, 4, 9, 2, 9, 6, 7])); //-> 9


// Bonus: We can solve the problem in O(1) space 
// WITHOUT modifying input array by using fast n slow pointers
const findDuplicate2 = (nums: number[]) => {
  let slow = nums[0]
  let fast = nums[nums[0]]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  // get cycle length
  let curr = nums[nums[slow]]
  let cycleLength = 1;
  while (curr !== nums[slow]) {
    curr = nums[curr];
    cycleLength++;
  }

  return findStart(nums, cycleLength);

  function findStart(arr: number[], cycleLength: number) {
    let p1 = arr[0],
      p2 = arr[0];
    
    // move p2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
      p2 = arr[p2];
      cycleLength--;
    }

    // increment both pointers until they meet at start of the cycle
    while (p1 !== p2) {
      p1 = arr[p1];
      p2 = arr[p2]
    }
    return p1;
  }
}

console.log(findDuplicate2([1, 4, 4, 3, 2])); //-> 4
