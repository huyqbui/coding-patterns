/*

Write a function, connectedComponentsCount, 
that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.

test_00:
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2

*/

// Time: 0(e) | Space: 0(n)
const connectedComponentsCount = () => {
  // create ref for a counter
  let count = 0;
  // create a new set to store visited nodes
  const visited = new Set();
  // iterate through graph object
  for (let node in graph) {
    if (travel(graph, node, visited) === true) count++;
  }

  return count;

  function travel(graph, currNode, visited) {
    if (visited.has(String(currNode))) return false;
    visited.add(String(currNode));

    for (let neighbor of graph[currNode]) {
      travel(graph, neighbor, visited);
    }

    return true;
  }

  // use helper traversal function to check if node has been visited
  // helper takes in (graph, currNode, visited)
  // if visited has currNode, return false to exit
  // otherwise add currNode to visited set
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

console.log(connectedComponentsCount(graph)); // -> 2
