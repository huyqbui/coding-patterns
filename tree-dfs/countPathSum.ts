/*
Given a binary tree and a number ‘S’, 
find all paths from root-to-leaf such that 
the sum of all the node values of each path equals ‘S’.

Example 1:
  root: [ 12, 7, 1, 4, 10, 5 ]
  S: 11

              12 
            /    \
          7        1 
          |       / \
          4     10   5

  output: 2 (7 + 4, 1 + 10)

Example 2:
  root: [10, 5, -3, 3, 2, 11, 3, -2, 1]
  S: 8

               10 
            /     \
          5        -3 
         / \          \
        3   2          11
       / \   \
      3  -2   1
  output: 3 (5 + 3, 5 + 2 + 1, -3 + 11)
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
// Space: O(N) for the cache and recursive calls
const countPathSum = (root: TreeNode, S: number) => {
  // define totalCount
  let totalCount = 0;
  // create pathCache to save all path sums and their frequency
  const pathCache: { [key: number]: number } = {};

  // helper function to traverse tree using dfs to add up totalCounts
  getCounts(root, 0);

  return totalCount;

  function getCounts(currNode: TreeNode | null, currPathSum: number) {
    if (!currNode) return 0;
    // get currPathSum (from root to currNode) & store ref to old path sums
    currPathSum += currNode.val;
    let oldPathSum = currPathSum - S;

    // if currPathSum equals S, or oldPathSum is in our cache, then a pathSum to S exists!
    if (currPathSum === S) totalCount++;
    if (oldPathSum in pathCache) totalCount += pathCache[oldPathSum];

    // otherwise store currPathSum in cache and its frequency
    currPathSum in pathCache
      ? (pathCache[currPathSum] += 1)
      : (pathCache[currPathSum] = 1);

    // traverse left sides of tree, then right
    getCounts(currNode.left, currPathSum);
    getCounts(currNode.right, currPathSum);
    
    // remove the currPathSum when backtracking
    pathCache[currPathSum] -= 1;
  }
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

const groot = new TreeNode(10);
groot.left = new TreeNode(5);
groot.right = new TreeNode(-3);
groot.left.left = new TreeNode(3);
groot.left.right = new TreeNode(2);
groot.right.right = new TreeNode(11);
groot.left.left.left = new TreeNode(3);
groot.left.left.right = new TreeNode(-2);
groot.left.right.right = new TreeNode(1);

console.log(countPathSum(root, 11)); //-> 2
console.log(countPathSum(groot, 8)); //-> 3

export {};
