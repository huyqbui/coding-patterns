/*

Given an array of numbers and a number ‘k’, 
find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

Example 1:
  Input: nums=[1, 2, -1, 3, 5], k = 2
  Output: [1.5, 0.5, 1.0, 4.0]
  Explanation: Lets consider all windows of size ‘2’:

  [1, 2] -> median is 1.5
  [2, -1] -> median is 0.5
  [-1, 3] -> median is 1.0
  [3, 5] -> median is 4.0

Example 2:
  Input: nums=[1, 2, -1, 3, 5], k = 3
  Output: [1.0, 2.0, 3.0]
  Explanation: Lets consider all windows of size ‘3’:

  [1, 2, -1] -> median is 1.0
  [2, -1, 3] -> median is 2.0
  [-1, 3, 5] -> median is 3.0
*/

const Heap = require('collections/heap.js');

const slidingWindowMedian = (nums: number[], k: number) => {
  // create a maxHeap and minHeap
  const maxHeap = new Heap([], null, (a: number, b: number) => a - b);
  const minHeap = new Heap([], null, (a: number, b: number) => b - a);
  let isEven = true;

  // length of resulting array will be length of nums - k + 1
  const result = Array(nums.length - k + 1).fill(0);
  console.log(result);

  for (let i = 0; i < nums.length; i++) {
    if (isEven) {
      minHeap.push(nums[i]);
      maxHeap.push(minHeap.pop());
    } else {
      maxHeap.push(nums[i]);
      minHeap.push(maxHeap.pop());
    }

    isEven = !isEven;
    rebalanceHeaps(maxHeap, minHeap);

    // once we have at least 'k' elements in window,
    // we can start adding median to result array
    let minWindowElements = i - k + 1;
    if (minWindowElements >= 0) {
      // if we have even nums, we need to get the avg of minHeap & maxHeap
      if (maxHeap.length === minHeap.length)
        result[minWindowElements] = (maxHeap.peek() + minHeap.peek()) / 2;
      else result[minWindowElements] = maxHeap.peek();

      // remove the num leaving the sliding window
      let toBeRemoved = nums[minWindowElements];
      if (toBeRemoved <= maxHeap.peek()) maxHeap.delete(toBeRemoved);
      else minHeap.delete(toBeRemoved);

      rebalanceHeaps(maxHeap, minHeap);
    }
  }
  return result;

  function rebalanceHeaps(maxHeap: any, minHeap: any) {
    if (maxHeap.length > minHeap.length + 1) {
      minHeap.push(maxHeap.pop());
    } else if (maxHeap.length < minHeap.length) {
      maxHeap.push(minHeap.pop());
    }
  }
};

const example1 = [1, 2, -1, 3, 5];

console.log(slidingWindowMedian(example1, 2)); //-> [1.5, 0.5, 1, 4]
console.log(slidingWindowMedian(example1, 3)); //-> [1, 2, 3]

export {};
