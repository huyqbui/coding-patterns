/*
Design a class to calculate the median of a number stream. 
The class should have the following two methods:

insertNum(int num): stores the number in the class
findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, 
the median will be the average of the middle two numbers.

Example 1:
  insertNum(3)
  insertNum(1)
  findMedian() -> output: 2
  insertNum(5)
  findMedian() -> output: 3
  insertNum(4)
  findMedian() -> output: 3.5
*/

// importing PriorityQueue as a heap structure, which is allowed on leetcode
import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

class MedianOfAStream {
  // since we only care about getting the median from the middle of all numbers
  maxHeap: MaxPriorityQueue<number>; // store smaller numbers in maxHeap 
  minHeap: MinPriorityQueue<number>; // store larger numbers in minHeap
  even: boolean

  constructor() {
    this.maxHeap = new MaxPriorityQueue<number>(); // O(1) access to largest peek
    this.minHeap = new MinPriorityQueue<number>(); // o(1) access to smallest peek
    this.even = true;
  }

  insertNum(num: number) {
    if (this.even) {
      // each time we get a num, and count is even:
      // push the new num into maxHeap, and pop it to get the largest num from maxHeap
      // push that popped num into minHeap
      this.minHeap.enqueue(num);
      this.maxHeap.enqueue(this.minHeap.dequeue())
    } else {
      // if count is odd, we want to add new num to maxHeap
      // push new num into minHeap, and pop the smallest num from minHeap into maxHeap
      this.maxHeap.enqueue(num);
      this.minHeap.enqueue(this.maxHeap.dequeue())
    }
    this.even = !this.even
  }

  findMedian() {
    // return the middle number(largest number from maxHeap) or
    // the average of peek numbers from both heaps
    if (this.even) {
      return (this.maxHeap.front() + this.minHeap.front()) / 2;
    }
    return this.maxHeap.front();
  }
}

const newStream = new MedianOfAStream();
newStream.insertNum(3);
newStream.insertNum(1);
console.log(newStream.findMedian()); //-> 2
newStream.insertNum(5);
console.log(newStream.findMedian()); //-> 3
newStream.insertNum(4);
console.log(newStream.findMedian()); //-> 3.5
newStream.insertNum(6);
newStream.insertNum(7);
console.log(newStream.findMedian()); //-> 4.5
newStream.insertNum(9);
newStream.insertNum(8);
console.log(newStream.findMedian()); //-> 5.5

console.log(JSON.stringify(newStream, null, 4))

export {}
