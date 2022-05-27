/*

Given a node rootNode, write a function getCheapestCost that 
calculates the minimal Sales Path cost in the tree.

Example: 
                0
             /  |   \  
            /   |     \
          5     3      6 
         /     / \    / \
       4      2   0  1   5
             /   /
            1   10
           /
          1

  Output: 7
  Explanation: shortest path is either 0 -> 6 -> 1 or 0 -> 3 -> 2 -> 1 -> 1
*/

// Time: O(n) for traveling each node once
// Space: O(n) for holding a stack of n recursive calls 
function getCheapestCost(rootNode: Node) {
  // get the length of the node's children
  // if we reach a node w/ no children, that's our leaf so return it's cost
  const length = rootNode.children.length;
  if (length === 0) return rootNode.cost;

  let minCost = Infinity;

  // iterate through each children
  for (const child of rootNode.children) {
    const tempCost = getCheapestCost(child);
    minCost = Math.min(minCost, tempCost);
  }
  return minCost + rootNode.cost
}

// Constructor to create a new Node
class Node {
  cost: number;
  children: Node[];
  constructor (cost: number) {
    this.cost = cost;
    this.children = []; 
  }
}

const branch5 = new Node(5);
branch5.children = [new Node(4)];
const branch6 = new Node(6);
branch6.children = [new Node(1), new Node(5)]
const branch1 = new Node(1);
branch1.children = [new Node(1)];
const branch2 = new Node(2);
branch2.children = [branch1]
const branch0 = new Node(0);
branch0.children = [new Node(10)]
const branch3 = new Node(3);
branch3.children = [branch2, branch0]
const tree = new Node(0);
tree.children = [branch5, branch3, branch6]


console.log(getCheapestCost(tree)) // 7

export {}
