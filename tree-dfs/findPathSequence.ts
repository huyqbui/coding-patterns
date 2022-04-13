/*
Given a binary tree and a number sequence, 
find if the sequence is present as a root-to-leaf path in the given tree.

Example 1:
  root: [ 1, 0, 1, 1, 6, 5 ]
  sequence: [1, 0, 7]

              1 
            /   \
          0       1 
          |      / \
          1     6   5

  output: false

Example 2: 
  root: [ 1, 0, 1, 1, 6, 5 ]
  sequence: [1, 1, 6]
  output: true
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

// Time: O(N) since we traverse each node only once
// Space: O(N) due to the storing the recursion stack
const findPathSequence = (root: TreeNode, sequence: number[]) => {
  // handle edge cases
  if (!root) return false;
  // traverse tree nodes using dfs via helper function (currNode, seq, idx) + recursion
  return travelPaths(root, sequence, 0);

  function travelPaths(currNode: TreeNode | null, seq: number[], idx: number): boolean {
    // if no currNode return false;
    if (!currNode) return false;
    // if currNode != number in seq, or idx >= seq length, return false
    if (currNode.val !== sequence[idx] || idx >= sequence.length) return false;

    // check if idx = total num of elements in seq
    // check if we're at the leaf node
    // if both checks are valid, return true
    const reachedEndSequence = idx === sequence.length - 1;
    const isLeaf = !currNode.right && !currNode.left;
    if (isLeaf && reachedEndSequence) return true;

    // return recursive call on currNode's left | currNode's right
    return (
      travelPaths(currNode.left, seq, idx + 1) ||
      travelPaths(currNode.right, seq, idx + 1)
    );
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(findPathSequence(root, [1, 0, 7])); //-> false
console.log(findPathSequence(root, [1, 1, 6])); //-> true
