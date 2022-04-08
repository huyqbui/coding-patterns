/*

Given the head of a LinkedList and a number ‘k’, 
reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with 
less than ‘k’ elements, reverse it too.

Example 1:
  head: 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 (where each number is a Node)
  k: 3
  output: 3 - 2 - 1 - 6 - 5 - 4 - 8 - 7
*/

class Node2  {
  value: any;
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Time: O(N) | Space: O(1)
const reverseEveryKSubLists = (head: Node2 | null, k: number) => {
  // handle edge cases
  if (k <= 1 || head === null) return head; 

  // store ref to curr, prev
  let curr = head,
     prev = null;
     
     // iterate until we break the loop
     while (true) {
       // store ref to firstHalfList, subListLastNode, next, i counter
       const firstHalfList = prev; 
       const subListLastNode = curr; 
       let next = null;
       let i = 0;
    // REVERSE K NODES
    while (curr && i < k) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      i++;
    }
    // prev will end up as last node in sublist
    // curr will end up as rest of our list

    // Connect with firstHalf
    if (firstHalfList !== null) firstHalfList.next = prev;

    else head = prev;

    // Connect with rest of list
    if (subListLastNode) subListLastNode.next = curr

    // break condition when we reach end of list
    if (curr === null) break;

    // reassign prev to subListLastNode to reverse next K nodes
    prev = subListLastNode; 
  }
  return head;
}

const franzList = new Node2(1)
franzList.next = new Node2(2)
franzList.next.next = new Node2(3)
franzList.next.next.next = new Node2(4)
franzList.next.next.next.next = new Node2(5)
franzList.next.next.next.next.next = new Node2(6)
franzList.next.next.next.next.next.next = new Node2(7)
franzList.next.next.next.next.next.next.next = new Node2(8)

console.log(JSON.stringify(reverseEveryKSubLists(franzList, 3), null, 4))