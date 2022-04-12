/*
Given a binary tree, 
return an array containing nodes in its right view. 
The right view of a binary tree is the set of nodes 
visible when the tree is seen from the right side.


Example 1:
  Input: [ 1, 2, 3, 4, 5, 6, 7]

              1 
            /   \
          2       3 
         / \     / \
        4   5   6   7 

  Right View: [1, 3, 7]

Example 2:
  Input: [ 12, 7, 1, 9, 10, 5, 3]
  
              12 
            /    \
          7        1 
          |       / \
          9     10   5
          |
          3
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
const treeRightView = (root: TreeNode) => {
  if (root === null) return [];

  // use a dequeue to push root nodes in FIFO order
  const treeRightNodes = [];
  const queue = new Deque()
  queue.push(root)


  while (queue.length) {
    const treeLevel = queue.length; // get the number of nodes for each level
    let currNode = null;
    for (let i = 0; i < treeLevel; i++) {
      currNode = queue.shift() // get the current node from first spot in queue
      if (currNode.left) queue.push(currNode.left) // push any child nodes
      if (currNode.right) queue.push(currNode.right)
    }
    // push the right most node into our treeRightNodes array
    treeRightNodes.push(currNode.val)
  }
  return treeRightNodes
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(treeRightView(root)); //-> [1,3,7]

const groot = new TreeNode(12);
groot.left = new TreeNode(7);
groot.right = new TreeNode(1);
groot.left.left = new TreeNode(9);
groot.right.left = new TreeNode(10);
groot.right.right = new TreeNode(5);
groot.left.left.left = new TreeNode(3);

console.log(treeRightView(groot)) //-> [12,1,5,3]

export {};
