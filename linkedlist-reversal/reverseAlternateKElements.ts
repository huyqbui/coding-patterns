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

class Nodee {
  value: any;
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

/* Hi-lvl Approach:
    - Reverse 'k' nodes
    - connect prev section to sublist
    - connect sublist to rest of list
    - skip 'k' nodes
*/

// Time: O(N) | Space: O(1)
const reverseAltKElements = (head: Nodee | null, k: number) => {
  // handle edge cases
  if (k <= 1 || head === null) return head;

  // store ref to curr, prev
  let curr = head,
    prev = null;

  // iterate until we reach end of list
  while (curr) {
    // store ref to prevSection, subListLastNode, next, i counter
    const prevSection = prev;
    const subListLastNode = curr;
    let next = null;
    let i = 0;

    // Reverse K nodes as sublist
    while (curr && i < k) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      i++;
    }
    // prev will end up as last node in sublist
    // curr will end up as rest of our list

    // Connect prevSection to subList
    if (prevSection !== null) prevSection.next = prev;
    else head = prev;

    // Connect subList to rest of list
    if (subListLastNode) subListLastNode.next = curr;

    // skip K Nodes
    i = 0;
    while (curr && i < k) {
      prev = curr;
      curr = curr.next;
      i++;
    }
  }
  return head;
};

const myList = new Nodee(1);
myList.next = new Nodee(2);
myList.next.next = new Nodee(3);
myList.next.next.next = new Nodee(4);
myList.next.next.next.next = new Nodee(5);
myList.next.next.next.next.next = new Nodee(6);
myList.next.next.next.next.next.next = new Nodee(7);
myList.next.next.next.next.next.next.next = new Nodee(8);

console.log(JSON.stringify(reverseAltKElements(myList, 2), null, 4));

export {}

