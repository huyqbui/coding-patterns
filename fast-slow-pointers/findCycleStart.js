/*

Given the head of a Singly LinkedList that contains a cycle, 
write a function to find the starting node of the cycle.

*/

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const findCycleStart = function(head){
  // create fast, slow pointers
  let fast = head,
    slow = head;
  while (fast !== null && fast.next !== null) {
    // while the fast pointer is not null, we can reassign the fast and slow pointers to their next nodes
    fast = fast.next.next;
    slow = slow.next;
    // if the fast pointer reaches the slow pointer, then we have found our cycle:
    // to find start, reset slow to the beginning head, reset fast, slow pointers to same 'speed'
    // once the slow reaches the fast pointer, we have found the start of our cycle
    if (fast === slow) {
      slow = head
      while (slow !== fast) {
        fast = fast.next
        slow = slow.next
      }
      return slow.value;
    }
  }
  return null;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(findCycleStart(head)) //-> 3

head.next.next.next.next.next.next = head.next.next.next
console.log(findCycleStart(head)) //-> 4

head.next.next.next.next.next.next = head
console.log(findCycleStart(head)) //-> 1
