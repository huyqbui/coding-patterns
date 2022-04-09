/*
Find the minimum depth of a binary tree. 
The minimum depth is the number of nodes along the shortest path 
from the root node to the nearest leaf node.

Example 1:
  Input: root = [1, 2, 3, 4, 5]
  Minimum Depth = 2

Example 2: 
  Input: [12, 7, 1, 9, 10, 5]
  Minimum Depth = 3
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
const findLevelAverages = (root: TreeNode) => {
  if (root === null) return 0;

  // create a queue and push root into queue
  const queue = new Deque();
  queue.push(root);
  let minDepth = 0;

  // keep iterating until queue is empty
  while (queue.length) {
    // each loop, count total elements in the queue for that level, increment minDepth
    const levelSize = queue.length;
    minDepth++;
    // remove the node from the queue, push children to queue
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift();
      // if currNode doesn't have any children, we found the minDepth
      if (!currNode.left && !currNode.right) return minDepth;

      // otherwise, push any children into the queue
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }
  return minDepth;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(findLevelAverages(root)); //-> 2

const groot = new TreeNode(12);
groot.left = new TreeNode(7);
groot.right = new TreeNode(1);
groot.left.left = new TreeNode(9);
groot.right.left = new TreeNode(10);
groot.right.right = new TreeNode(5);
groot.right.left.left = new TreeNode(11);

console.log(findLevelAverages(groot)); //-> 3

export {};
