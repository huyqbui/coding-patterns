/*
Given a binary tree and a number ‘S’, 
find if the tree has a path from root-to-leaf such that 
the sum of all the node values of that path equals ‘S’.

Example 1:
  root: [ 12, 7, 1, 9, 10, 5, 3]
  sum: 23

              12 
            /    \
          7        1 
          |       / \
          9     10   5

  output: true (12 + 1 + 10 = 23)
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

const hasPathSum = (root: TreeNode | null , S: number): boolean => {
  // use a dfs approach via recursion
  
  if (root === null) return false; // exit out if root if null
  
  const isLeafNode = (!root.left && !root.right) // check if we reached furthest node
  
  if (root.val === S && isLeafNode) return true; // base case
  
  // each recursive call, subtract sum by root's val, and pass that in to the next call
  return hasPathSum(root.left, S - root.val) || hasPathSum(root.right, S - root.val)
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(hasPathSum(root, 23)) //-> true
console.log(hasPathSum(root, 17)) //-> false

export {}