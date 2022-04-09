/*
Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, 
then right to left for the next level and keep alternating 
in the same manner for the following levels.

Example 1:
  Input: root = [12, 7, 1, 9, 10, 5, 20, 17]
  Output: [ [12], [1, 7], [9, 10, 5], [17, 20] ]
*/

const Deque = require('../node_modules/collections/deque') //http://www.collectionsjs.com/deque

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
const levelOrderTraversal = (root: TreeNode) => {
  const result: any[] = []
  if (root === null) return result;

  // create a queue and push root into queue
  const queue = new Deque();
  queue.push(root)
  
  // boolean to keep track of reversal
  let leftToRight = true;

  // keep iterating until queue is empty
  while (queue.length) {
    // each loop, count the total elements in the queue for that level
    const levelSize = queue.length;
    const currLevel = [];


    // remove the node from the queue & push it's value into the currLevel array
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift()

      // reverse order of nodes depending on boolean
      if (leftToRight) currLevel.push(currNode.val);
      else currLevel.unshift(currNode.val)

      // if the node has any children, push them into the queue
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
    // push all the nodes from currLevel into the result array
    result.push(currLevel)

    // alternates between true & false every iteration
    leftToRight = !leftToRight

    /*
      If we want to return the level order in REVERSE,
      we can just unshift the currLevel instead of pushing it
    */
  }
  return result
}

const root = new TreeNode(12)
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)

console.log(levelOrderTraversal(root)) //-> [ [12], [1, 7], [9, 10, 5], [17, 20] ]

export {}