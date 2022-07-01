/*
Given the head of a LinkedList and two positions ‘p’ and ‘q’, 
reverse the LinkedList from position ‘p’ to ‘q’.

Example 1:
  head: 1 -> 2 -> 3 -> 4 -> 5 -> 6 (where each number is a Node)
  p: 2
  q: 4
  output: 1 -> 4 -> 3 -> 2 -> 5 -> 6
*/

class Nodee  {
  value: any;
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Time: O(N) where N is number of nodes | Space: O(1)
const reverseSubList = (head: Nodee | null, p: number, q: number) => {
  if (p === q) return head; // -> handle edge case
  // cycle through list to have curr start at p-th node
  let i = 0,
    curr = head,
    prev = null;
  while (curr && i < p - 1) {
    prev = curr;
    curr = curr.next;
    i++;
  }
  // store refs to subListLastNode, firstHalfOfList
  const sublistLastNode = curr; 
  const firstHalfOfList = prev; 

  i = 0;
  let next = null;
  let subListLength = q - p + 1
  // reverse the order of nodes in sublist
  // prev will end up as last node in sublist
  // curr will end up as rest of our list
  while (curr && i < subListLength) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next;
    i++
  }
  const secondHalfOfList = curr

  // re-connect firstHalfOfList to sublist
  // if firstHalfOfList was null, then assign it as head
  if (!firstHalfOfList) head = prev
  else firstHalfOfList.next = prev

  // re-connect sublist's last node to rest of our list
  if (sublistLastNode) sublistLastNode.next = secondHalfOfList
  return head;

}

const myList = new Nodee(1)
myList.next = new Nodee(2)
myList.next.next = new Nodee(3)
myList.next.next.next = new Nodee(4)
myList.next.next.next.next = new Nodee(5)
myList.next.next.next.next.next = new Nodee(6)

console.log(JSON.stringify(reverseSubList(myList, 2, 4), null, 4))