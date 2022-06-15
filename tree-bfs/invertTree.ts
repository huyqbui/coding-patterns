class  TreeNode {
  val;
  left: null | TreeNode;
  right: null | TreeNode;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const invertBinaryTree = (root: TreeNode) => {
  // use BFS to get all nodes by level w/ queue
  const queue = []
  queue.push(root);

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr) {
      swap(curr);
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
  }

  function swap(node: TreeNode) {
    const { left, right } = node;
    node.left = right;
    node.right = left;
  }
  return root
}

const invertBinaryTreeRecursive = (root: TreeNode) => {
  if (!root) return;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left && root.right) {
    invertBinaryTreeRecursive(root.left);
    invertBinaryTreeRecursive(root.right)
  }
  return root;
}

const tree = new TreeNode(4);  
tree.left = new TreeNode(2);  
tree.right = new TreeNode(7);  
tree.left.left = new TreeNode(1);  
tree.left.right = new TreeNode(3);  
tree.right.left = new TreeNode(6);  
tree.right.right = new TreeNode(9);  
console.log(tree)
console.log(invertBinaryTree(tree));

export {}