/*

Given the head of a LinkedList and a number ‘k’, 
reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with 
less than ‘k’ elements, reverse it too.

Example 1:
  head: 1 - 2 - 3 - 4 - 5  (where each number is a Node)
  k: 2
  output: 4 - 5 - 1 - 2 - 3
*/

class Node4 {
  value: any;
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Time: O(N) | Space: O(1)
const rotateList = (head: Node4 | null, k: number) => {
  // handle edge cases
  if (!head || k <= 0) return head;

  // get length & ptr of our list
  let length = 1,
    ptr = head;
  while (ptr.next) {
    length++;
    ptr = ptr.next;
  }

  // restrict k by length, then reset prev & ptr to beginning
  k = k % length;

  let prev = head;
  ptr = head;

  // move ptr 'k' positions ahead
  while (k) {
    k--;
    ptr = ptr.next;
  }

  // since ptr is 'k' steps ahead, it will tell us the k-th position from end
  // iterate through ptr, once ptr reaches end:
  //   - ptr will be at last node
  //   - prev will be at k-th position from end
  while (ptr.next) {
    prev = prev.next;
    ptr = ptr.next;
  }

  // break list and modify final head and last node
  ptr.next = head;
  head = prev.next;
  prev.next = null;
  return head;
};

const Lists = new Node4(1);
Lists.next = new Node4(2);
Lists.next.next = new Node4(3);
Lists.next.next.next = new Node4(4);
Lists.next.next.next.next = new Node4(5);

console.log(JSON.stringify(rotateList(Lists, 2), null, 4));
// -> 4 - 5 - 1 - 2 - 3
