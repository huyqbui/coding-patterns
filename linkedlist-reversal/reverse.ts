class Nodee {
  value: any;
  next: any;
  constructor(value: any, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Time: O(N) where N is number of nodes | Space: O(1)
const reverse = (head: Nodee) => {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

const myList = new Nodee('a');
myList.next = new Nodee('b');
myList.next.next = new Nodee('c');
myList.next.next.next = new Nodee('d');
myList.next.next.next = new Nodee('e')

console.log(myList)
console.log(reverse(myList));
