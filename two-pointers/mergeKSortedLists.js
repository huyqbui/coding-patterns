/*

You are given an array of k linked-lists lists, 
each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
  Input: lists = [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]
  Explanation: The linked-lists are:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted list:
  1->1->2->3->4->4->5->6
Example 2:
  Input: lists = []
  Output: []
Example 3:
  Input: lists = [[]]
  Output: []
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    const merged = [];

    for (let i = 0; i < lists.length; i+2) {
      const l1 = lists[i];
      let l2;
      if (i + 1 < lists.length) l2 = lists[i + 1];
      else l2 = null;
      merged.push(mergeList(l1, l2))
    }
    lists = merged;
  }
  return lists[0]
  
  function mergeList(l1, l2) {
    let curr = new ListNode()
    let temp = curr;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        temp.next = l1;
        l1 = l1.next;
      } else {
        temp.next = l2;
        l2 = l2.next;
      }
      temp = temp.next;
    }
    if (l1) temp.next = l1;
    if (l2) temp.next = l2;

    return curr.next;
  }
}

const test = [[1,4,5],[1,3,4],[2,6]]
console.log(mergeKLists(test))