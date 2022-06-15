class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function serialize(root: TreeNode | null): string {
  let result = []
  // use a DFS approach using stack
  const stack = [];
  stack.push(root);
  let level: number | undefined;
  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr) {
      result.push(curr.val);
      stack.push(curr.right);
      stack.push(curr.left);
    } else {
      result.push('null')
    }
  }

  return result.join(',');
} 

function deserialize(data: string): TreeNode | null {
  const parsed = data.split(',')
  let idx = -1;
  return dfs()

  function dfs() {
    let val = parsed[++idx]; 
    if (val === 'null') return null;

    const root = new TreeNode(parseInt(val))
    root.left = dfs();
    root.right = dfs();
    return root
  }
}

function serializeAlt(root: TreeNode | null): string {
  return JSON.stringify(root);
}
function deserializeAlt(data: string): TreeNode | null {
  return JSON.parse(data);
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.right.left = new TreeNode(4)
tree.right.right = new TreeNode(5)


let serial = serialize(tree);
console.log(serial)
console.log(deserialize(serial))
export {}

