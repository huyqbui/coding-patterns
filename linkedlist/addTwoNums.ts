/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
  Input: 
    l1 = [2, 4, 3] 
    l2 = [5, 6, 4]
  Output:
    result = [7, 0 8]
  Explanation:
    342 + 465 = 807.

Example 2:
Input: 
  l1 = [9,9,9,9,9,9,9] 
  l2 = [9,9,9,9]
Output: 
  result = [8,9,9,9,0,0,0,1]
*/

class ListNode {
  value: any; 
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

/*
  l1: 2 => 4 => 3
  l2: 5 => 6 => 4

   c:      1
   s: 0    0    8
   r: 7 => 0 => 8

*/
const addTwoNums = (l1: ListNode, l2: ListNode) => {
  // create a new ListNode, and create a curr variable as our pointer
  // iterate through l1 & l2 while either list has values, or sum > 0;
  // if l1: add its val to sum, move l1's pointer to its next node
  // if l2: add its val to sum, move l1's pointer to its next node

  // if sum greater 10, subtract sum by 10, and set carry to 1
  // set curr.next to be the sum
  // move the pointer to point to the curr's next node
  // update sum to be val of carry, and reset carry to 0

  // if sum > 0, assign the curr.next to be sum

  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0, sum = 0;
  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    curr.next = new ListNode(sum);
    curr = curr.next;
    sum = carry;
    carry = 0;
  }
  if (sum > 0) curr.next = new ListNode(sum);

  curr = dummyHead.next;

  return printList(curr);

  function printList(list: ListNode) {
    const arr = []
    while (list) {
      arr.push(list.value)
      list = list.next;
    }
    return arr;
  }
}

const test1 = new ListNode(2)
test1.next = new ListNode(4)
test1.next.next = new ListNode(3)

const test2 = new ListNode(5)
test2.next = new ListNode(6)
test2.next.next = new ListNode(4)

const test3 = new ListNode(9)
test3.next = new ListNode(9)
test3.next.next = new ListNode(9)
test3.next.next.next = new ListNode(9)
test3.next.next.next.next = new ListNode(9)
test3.next.next.next.next.next = new ListNode(9)
test3.next.next.next.next.next.next = new ListNode(9)

const test4 = new ListNode(9)
test4.next = new ListNode(9)
test4.next.next = new ListNode(9)
test4.next.next.next = new ListNode(9)

console.log(addTwoNums(test1, test2)) //-> [7, 0, 8]
console.log(addTwoNums(test3, test4)) //-> [ 8, 9, 9, 9, 0, 0, 0, 1 ]


export {}