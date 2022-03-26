/*

Given the head of a Singly LinkedList, 
write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space 
and the input LinkedList should be in the original form 
once the algorithm is finished. The algorithm should have O(N)
O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true
Example 2:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const palindromeLinkedList = (head) => {
  // cover edge cases
  if (!head || !head.next) return true;
  // a palindrome is the same sequence forwards and backwards
  // use fast/slow pointer to find the middle of the LL
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

  // reverse the second half of the LL
  let headSecondHalf = reverseList(slow)
  let copySecondHalf = headSecondHalf
  
  // compare first half & second half to see if they are the same
  while (head && headSecondHalf) {
    if (head.value !== headSecondHalf.value) break;
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  // revert our reversal from before
  reverseList(copySecondHalf)

  if (head === null || headSecondHalf === null) return true;
  return false;

  function reverseList(head) {
    let prev = null;
    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev
  }

}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(palindromeLinkedList(head)); //-> true
// 2 -> 4 -> 6 -> 4 -> 2 -> null (true)

head.next.next.next.next.next = new Node(2);
console.log(palindromeLinkedList(head)); //-> false
// 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null (false)