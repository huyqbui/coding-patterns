/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
Example: 
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]
*/

// STEPS:
// create an output listnode and add a dummy node to it

// iterate while l1 & l2 have values
  // compare values, and assign output's next to be the smaller node
  // move to the next corresponding in the list & and in the output

// if any list still have values, add that to the output

class ListNode {
  value: any; 
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Time: O(N) where we iterate through the lists once
// Space: O(1) constant ignoring the output list
const mergeTwoLists = (l1: ListNode, l2: ListNode) => {

  const output = new ListNode(-1);
  let head = output;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }

  if (l1) {
    head.next = l1
  } else if (l2) {
    head.next = l2
  }
  return output.next
}

const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

console.log(mergeTwoLists(list1, list2)) //->

export {}