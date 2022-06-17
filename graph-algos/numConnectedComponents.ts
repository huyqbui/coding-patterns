/*

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to find the number of connected components in an undirected graph.

Example 1:
     0          3
     |          |
     1 --- 2    4
Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

Example 2:
     0           4
     |           |
     1 --- 2 --- 3
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.

Note:
You can assume that no duplicate edges will appear in edges. 
Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

*/

const numConnectedComponents = (num: number, edges: number[][]) => {
  // convert edges to an adjacencyList object
    // iterating through each edge in edges,
    // create keys with the edge, and the values as all the connected pairs
  
  // create a visited set to keep track of visited nodes
  // for each node in adjacenyList, use helperfunction to travel
    // if node has been visited, return early
    // else add to visited, and recursively travel its neighbors
  
  const adjacencyList: {[key: string]: number[]} = {}
  for (const [a, b] of edges) {
    if (!(a in adjacencyList)) adjacencyList[a] = []
    if (!(b in adjacencyList)) adjacencyList[b] = []

    adjacencyList[a].push(b)
    adjacencyList[b].push(a)
  }

  const visited = new Set();
  let componentCount = 0;
  let allNodesFound = false;

  for (const node in adjacencyList) {
    if (travel(node) === true) componentCount++;
  }



  function travel(node: string) {
    if (visited.has(String(node))) return;
    visited.add(String(node));
    for (const neighbor of adjacencyList[node]) {
      travel(String(neighbor));
    }
    return true;
  }
  return componentCount
}

const edges = [[0, 1], [1, 2], [3, 4]];
const edges2 = [[2,3],[1,2],[1,3]]
const edges3 = [ [0, 1], [1, 2], [2, 3], [3, 4] ]
console.log(numConnectedComponents(5, edges)); //-> 2
console.log(numConnectedComponents(4, edges2)); //-> 2
console.log(numConnectedComponents(4, edges3)); //-> 1
