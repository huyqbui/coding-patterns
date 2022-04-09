/*
Given a binary tree, populate an array 
to represent the averages of all of its levels.

Example 1:
  Input: root = [1, 2, 3, 4, 5, 6, 7]
  Output: [ 1, 2.5, 5.5 ]

Example 2: 
  Input: [12, 7, 1, 9, 2, 10, 5]
  Output: [12, 4, 6.5]
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
const findLevelAverages = (root: TreeNode) => {
  const result: any[] = []
  if (root === null) return result;

  // create a queue and push root into queue
  const queue = new Deque();
  queue.push(root)
  
  // keep iterating until queue is empty
  while (queue.length) {
    // each loop, count the total elements in the queue for that level
    const levelSize = queue.length;
    let sumOfNodes = 0
    
    // remove the node from the queue, push children to queue, and add node's val to sum
    for (let i = 0; i < levelSize; i++) {
      let currNode = queue.shift()

      // if the node has any children, push them into the queue
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)

      // get accumulated sum of all nodes in level 
      sumOfNodes += currNode.val;
    }
    
    // find average of sumOfNodes by its level size and push into result array
    let levelAverages = sumOfNodes/levelSize
    result.push(levelAverages)

  }
  return result
}

const root = new TreeNode(1)
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7)

console.log(findLevelAverages(root)) //-> [ 1, 2.5, 5.5 ]


const groot = new TreeNode(12)
groot.left = new TreeNode(7);
groot.right = new TreeNode(1);
groot.left.left = new TreeNode(9);
groot.left.right = new TreeNode(2);
groot.right.left = new TreeNode(10);
groot.right.right = new TreeNode(5)

console.log(findLevelAverages(groot)) //-> [12, 4, 6.5]

export {}