/*
Given a binary tree and a number ‘S’, 
find all paths from root-to-leaf such that 
the sum of all the node values of each path equals ‘S’.

Example 1:
  root: [ 1, 0, 1, 1, 6, 5 ]

              1 
            /    \
          0        1 
          |       / \
          1      6   5

  output: 101 + 116 + 115 = 332
*/

import { rootCertificates } from 'tls';

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

// Time: O(N) since we traverse each node only once
// Space: O(N) used to store the recursion stack
const allPathSum = (root: TreeNode | null) => {
  // edge case: if root null, return 0
  if (!root) return 0;

  // use helper function to keep track of sums for each node path
  return getSums(root, 0);

  function getSums(currNode: TreeNode | null, sum: number): number {
    if (!currNode) return 0;

    // track and store the digits to be summed
    sum = 10 * sum + currNode.val;

    const isLeaf = !currNode.left && !currNode.right;
    if (isLeaf) return sum;
    return getSums(currNode.left, sum) + getSums(currNode.right, sum);
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(allPathSum(root)); //-> 332 (101 + 116 + 115)

export {};
