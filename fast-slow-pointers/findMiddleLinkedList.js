/*
Given the head of a Singly LinkedList, 
write a method to return the middle node of the LinkedList.

If the total number of nodes in the LinkedList is even, 
return the second middle node.

Example 1:
iteration: 2
                 s
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
                           f
Output: 3
Example 2:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4
Example 3:

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4
*/

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

// Time: O(N) where N is length of LinkedList | Space: O(1) Constant
const findMiddleLinkedList = function(head) {
  // use a fast/slow pointers approach
  let slow = head,
    fast = head
  // move through linked list while fast & fast.next is not null
  while (fast && fast.next) {
    // if fast.next is null, then we've reached end of list
    // so slow should be at middle
    slow = slow.next; 
    fast = fast.next.next; 
  }
  return slow.value
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(findMiddleLinkedList(head)) //-> 3

head.next.next.next.next.next = new Node(6) //-> 4
console.log(findMiddleLinkedList(head))

head.next.next.next.next.next.next = new Node(7) //-> 4
console.log(findMiddleLinkedList(head))