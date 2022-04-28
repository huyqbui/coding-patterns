class MinBinaryHeap {
  heap: any[];
  constructor() {
    this.heap = [];
  }

  enqueue(element: any) {
    this.heap.push(element);
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

      if (this.heap[child] >= this.heap[parent]) break; // exit loop once child > parent

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
        if (leftChild < parent) swap = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.heap[rightIdx];
        const isRightLessThanLeftAndHasSwap = swap && rightChild < leftChild;
        const isRightLessThanParent = !swap && rightChild < parent;

        if (isRightLessThanLeftAndHasSwap || isRightLessThanParent) swap = rightIdx;
      }

      if (!swap) break;
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      console.log(this.heap)
      idx = swap;
    }
  }
}

const myHeap = new MinBinaryHeap();
myHeap.enqueue(6);
myHeap.enqueue(9);
myHeap.enqueue(7);
myHeap.enqueue(3);
myHeap.enqueue(12);
myHeap.enqueue(10);
myHeap.enqueue(11);
myHeap.dequeue()

console.log(myHeap);

export {}