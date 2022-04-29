class Node {
  val: any;
  priority: any;
  constructor(val: any, priority: any) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  heap: any[];
  constructor() {
    this.heap = [];
  }

  enqueue(val: any, priority: any) {
    let newNode = new Node(val, priority);
    this.heap.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    let smallest = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return smallest;
  }

  bubbleUp() {
    // Reference new element
    let child = this.heap.length - 1;
    while (child > 0) {
      // Find 'parent'
      let parent = Math.floor(child / 2);

      if (this.heap[child].priority >= this.heap[parent].priority) break; // exit loop once child priority >= parent priority

      if (child > parent) {
        // prettier-ignore
        [ this.heap[child], this.heap[parent] ] = [ this.heap[parent], this.heap[child] ];

        child = parent;
      }
    }
  }

  bubbleDown() {
    /*
      init sinking el, the new root of the tree
      start a loop
      init the right * & left child idx for sinked
      if sinked > left, remember it
      if sinked > left && sinked > right, compare left, right & swap with smaller value
      if sinked < left && sinked < right, it is in correct spot so exit loop
    */

    let idx = 0;
    const length = this.heap.length;
    const parent = this.heap[0];

    while (true) {
      let leftIdx = idx * 2 + 1,
        rightIdx = idx * 2 + 2,
        swap = null;
      let leftChild, rightChild;

      if (leftIdx < length) {
        leftChild = this.heap[leftIdx];
        if (leftChild.priority < parent.priority) swap = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.heap[rightIdx];
        const isRightLessThanLeftAndHasSwap =
          swap && rightChild.priority < leftChild.priority;
        const isRightLessThanParent =
          !swap && rightChild.priority < parent.priority;

        if (isRightLessThanLeftAndHasSwap || isRightLessThanParent)
          swap = rightIdx;
      }

      if (!swap) break;
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      console.log(this.heap);
      idx = swap;
    }
  }
}

const queue = new PriorityQueue();
queue.enqueue('A', 6);
queue.enqueue('B', 9);
queue.enqueue('C', 7);
queue.enqueue('D', 3);
queue.enqueue('E', 12);
queue.enqueue('F', 10);
queue.enqueue('G', 11);
queue.dequeue();

console.log(queue);

export default PriorityQueue;
