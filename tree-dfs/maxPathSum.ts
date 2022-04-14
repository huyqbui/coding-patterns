/*

Find the path with the maximum sum in a given binary tree. 
Write a function that returns the maximum sum.

A path can be defined as a sequence of nodes 
between any two nodes and doesn’t necessarily pass through the root. 
The path must contain at least one node.

Example 1:
  root: [ 1, 2, 3, 4, null, 5, 6 ]

              1 
            /    \
          2        3 
          |       / \
          4      5   6

  output: 16
  explanation: path of nodes with maximum sum: [4, 2, 1, 3, 6] = 16

Example 2:
  root: [ 1, 2, 3, 1, 3, 5, 6, null, null, null, null, 7, 8, 9 ]

              1 
            /    \
          2        3 
         / \      /  \
        1   3    5    6
                / \   |
               7   8  9

  output: 31
  explanation: path of nodes with maximum sum: [3, 5, 6, 8, 9] = 31
*/


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

// Time: O(N) since we traverse each node once
// Space: O(N) used to store the recursive calls
const maxPathSum = (root: TreeNode) => {
  // define global sum variable
  let sum = -Infinity;
  // use helper function to traverse tree via dfs
  dfsDiamter(root);
  return sum;

  function dfsDiamter(currNode: TreeNode | null): number {
    if (!currNode) return 0;

    const leftHeight = dfsDiamter(currNode.left);
    const rightHeight = dfsDiamter(currNode.right);

    // ignore any path which have overall negative sum
    const maxLeft = Math.max(leftHeight, 0)
    const maxRight = Math.max(rightHeight, 0)

    // get current max path sum that involves current node
    let localSum = currNode.val + maxLeft + maxRight

    // if localSum is greater than global sum, update it
    sum = Math.max(sum, localSum)

    // get largest path sum w/ parent node, choosing EITHER max of left or right
    return Math.max(maxLeft, maxRight) + currNode.val;
  }
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(maxPathSum(root)) //-> 6

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);

console.log(maxPathSum(root)) //-> 31

root = new TreeNode(-1);
root.left = new TreeNode(-3);

console.log(maxPathSum(root)) //-> -1

export {};
