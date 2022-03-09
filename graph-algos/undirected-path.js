/*

Write a function, undirectedPath, 
that takes in an array of edges for an undirected graph and two nodes:
(nodeA, nodeB). 
The function should return a boolean 
indicating whether or not there exists a path between nodeA and nodeB.

test_00:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
undirectedPath(edges, 'j', 'm'); // -> true
*/

// n = # of nodes
// e = # of edges
// Time: 0(e) | Space: 0(n)
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // convert this edge list to a graph object using a helper function
  return hasPath(graph, nodeA, nodeB, new Set());
  // check if nodeA has path to nodeB using another helper function (graph, src, dest, visited)
};

const buildGraph = (edges) => {
  // iterate through each item in edges
  const graph = {};
  for (let item of edges) {
    // deconstruct the subarray pair as a & b
    const [a, b] = item;
    // if our graph obj does not have the deconstructed edge item, then add as a key with empty array as value
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    // otherwise, push b's edge value to a's key & push a's edge value to b's key
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const hasPath = (graph, src, dest, visited) => {
  // check, if we've visited this node (src) already, return false to exit
  if (visited.has(src)) return false;
  // otherwise add the node (src) to visited set
  visited.add(src);

  // base case: if the src = dest, return true
  if (src === dest) return true;
  // iterate through neighbors by recursively calling has path function
  // passing in the neighbor as the src this time
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited) === true) return true;
  }
  return false;
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

console.log(undirectedPath(edges, 'j', 'm'));
