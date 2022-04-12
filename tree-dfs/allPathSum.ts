/*
Given a binary tree and a number ‘S’, 
find all paths from root-to-leaf such that 
the sum of all the node values of each path equals ‘S’.

Example 1:
  root: [ 12, 7, 1, 4, 10, 5 ]
  sum: 23

              12 
            /    \
          7        1 
          |       / \
          4     10   5

  output: [ [12, 7, 4], [12, 1, 10] ]
*/

const Deque = require('../node_modules/collections/deque'); //http://www.collectionsjs.com/deque

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

// Time: O(N * logN) due to traversing N nodes, then log(N) to check its paths.
// Space: O(N * logN). AllPaths can have O(N) nodes, and each path itself can have logN nodes in it.
const allPathSum = (root: TreeNode | null, S: number): number[][] => {
  if (root === null) return [] // handle edge cases

  // create an array variable to store allPaths & currPath
  // use a dfs approach via recursion
  const allPaths: number[][] = [];
  const currPath: number[] = [];
  getPaths(root, S);
  return allPaths;

  
  function getPaths(currNode: TreeNode | null, sum: number) {
    if (currNode === null) return;
    // push node val to currPath
    currPath.push(currNode.val);

    const isLeafNode = !currNode.left && !currNode.right;
    // if we reached furthest node, and node val equals our sum, push all currPath nodes to allPaths
    if (currNode.val === sum && isLeafNode) {
      allPaths.push([...currPath]);

    // else traverse left sub-tree, then right sub-tree
    } else {
      getPaths(currNode.left, sum - currNode.val);
      getPaths(currNode.right, sum - currNode.val);
    }
    // remove currNode from path to backtrack
    currPath.pop();
  }
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(allPathSum(root, 23)); //-> [ [12, 7, 4], [12, 1, 10] ]
console.log(allPathSum(root, 17)) //-> []
console.log(allPathSum(root, 18)) //-> [ [12, 1, 5] ]

export {};
