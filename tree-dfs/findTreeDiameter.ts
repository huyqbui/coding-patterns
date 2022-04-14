/*

Given a binary tree, find the length of its diameter. 
The diameter of a tree is the number of nodes 
on the longest path between any two leaf nodes. 
The diameter of a tree may or may not pass through the root.

Note: 
You can always assume that there are at least two leaf nodes in the given tree.

Example 1:
  root: [ 1, 2, 3, 4, 5, 6 ]

              1 
            /    \
          2        3 
          |       / \
          4      5   6

  output: 5
  explanation: The longest diameter of the tree is: [4, 2, 1, 3, 6]
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
const findDiameter = (root: TreeNode) => {
  if (!root) return 0;
  // define global diameter variable
  let diameter = 0;
  // use helper function to traverse tree via dfs
  dfsDiamter(root);
  return diameter;

  function dfsDiamter(currNode: TreeNode | null): number {
    if (!currNode) return 0;

    const leftHeight = dfsDiamter(currNode.left);
    const rightHeight = dfsDiamter(currNode.right);

    // update diameter at every node
    diameter = Math.max(diameter, leftHeight + rightHeight + 1);
    
    // recalculate largest diameter on the parent call
    return 1 + Math.max(leftHeight, rightHeight);
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(findDiameter(root)); //-> 5

root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);

console.log(findDiameter(root)); //-> 7

export {};
