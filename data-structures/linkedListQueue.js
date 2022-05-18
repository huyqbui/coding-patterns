class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    const node = new  ListNode(val);
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;

    if (!this.head) {
      this.head = this.tail;
    }
  }

  dequeue() {
    if (!this.head) {
      throw new Error('Empty queue');
    }

    const val = this.head.val;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }
    return val;
  }
}

const cue = new LinkedListQueue()

cue.enqueue('A')
cue.enqueue('B')
cue.enqueue('C')


console.log(JSON.stringify(cue, null, 4))
