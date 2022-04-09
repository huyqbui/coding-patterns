/*
Given a binary tree, 
connect each node with its level order successor. 
The last node of each level should point to a null node.


Example 1:
  Input: [ 1, 2, 3, 4, 5, 6, 7]
  Output: 
              1 > null
            /   \
          2   >   3 > null
         / \     / \
        4 > 5 > 6 > 7 > null
*/

const Deque = require("../node_modules/collections/deque"); //http://www.collectionsjs.com/deque

class TreeNode {
  val: any;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;

  constructor(val: any) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null
  }
}

// Time: O(N) when using a deque, else O(N^2) when using a JS array-based queue
// Space: O(N) for the result array, and the queue
const connectLevelSiblings = (root: TreeNode) => {
  if (root === null) return root;

  // create a dequeue to push root nodes in FIFO order
  const queue = new Deque();
  queue.push(root);

  // iterate through queue, store ref to prevNode
  while (queue.length) {
    let prevNode = null;
    let qLen = queue.length;

    // get currNode from the queue
    for (let i = 0; i < qLen; i++) {
      const currNode = queue.shift();
      console.log(currNode.val);

      // attach all currNodes that have a prevNode
      if (prevNode) prevNode.next = currNode
      else prevNode = currNode
      
      // push children nodes into queue
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
  }
  return root
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(connectLevelSiblings(root)); 

export {};
