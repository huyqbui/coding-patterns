/*

Given the root of a Binary Search Tree (BST), 
convert it to a Greater Tree such that 
every key of the original BST is changed to the original key 
plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:
  Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
  Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

Example 2:
  Input: root = [0,null,1]
  Output: [1,null,1]

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

const convertBST = (root: TreeNode) => {
  // store var for localSum, prev
  let localSum = 0,
    prev = 0;
  // create helper travel function(root)
  function travel(currNode: TreeNode | null) {
    if (currNode) {
      // if root, travel root's right nodes
      travel(currNode.right)

      // add localSum to currNode's val
      // reassign currNode's val to prev
      // reassign prev to localSum
      localSum += currNode.val
      currNode.val += prev
      prev = localSum

      // travel root's left nodes
      travel(currNode.left)
    }
  }
  travel(root)
  // return root
  return root

}


let root = new TreeNode(4)
root.left = new TreeNode(1);
root.right = new TreeNode(6);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
root.left.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(8);

console.log(JSON.stringify(root, null, 4))

console.log(convertBST(root)) 

//-> [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
export {}