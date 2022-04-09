/*
Given a binary tree and a node, 
find the level order successor of the given node in the tree. 
The level order successor is the node that appears 
right after the given node in the level order traversal.

Example 1:
  Input: 
    root: [1, 2, 3, 4, 5]
    Given Node: 3
  Output:
    Level Order Successor: 4

Example 2: 
  Input: 
    root: [12, 7, 1, 9, 10, 5]
    Given Node: 9
  Output:
    Level Order Successor: 10
*/

const Deque = require("../node_modules/collections/deque"); //http://www.collectionsjs.com/deque

class TreeNode {
  val: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: any) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Time: O(N) when using a deque, else O(N^2) when using a JS array-based queue
// Space: O(N) for the result array, and the queue
const findSuccessor = (root: TreeNode, key: any) => {
  if (root === null) return 0;

  // create a dequeue to push root's nodes in FIFO order, and have ref for prevNode
  const queue = new Deque()
  queue.push(root);
  let prevNode;

  while (queue.length) {
    const qLen = queue.length;

    // get the current node by shifting it from queue
    for (let i = 0; i < qLen; i++) {
      const currNode = queue.shift()

      // if prevNode is equal to key, then our currNode is its successor!
      if (prevNode) {
        if (prevNode.val === key) return currNode.val
        }

      // otherwise, push any children into the queue
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)

      // track the prevNode for next iteration
      prevNode = currNode;
    }
  }
  return 0
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(findSuccessor(root, 3)); //-> 4

const groot = new TreeNode(12);
groot.left = new TreeNode(7);
groot.right = new TreeNode(1);
groot.left.left = new TreeNode(9);
groot.right.left = new TreeNode(10);
groot.right.right = new TreeNode(5);


console.log(findSuccessor(groot, 9)); //-> 10

export {};
