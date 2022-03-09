/*

SHORTEST PATH:

Write a function, shortestPath, 
that takes in an array of edges for an undirected graph 
and two nodes (nodeA, nodeB). 
The function should return the length of the shortest path 
between A and B. 
Consider the length as the number of edges in the path, 
not the number of nodes. If there is no path between A and B, 
then return -1.

test_00:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

graph = {
  v: [w, z],
  w: [v, x],
  x: [w, y],
  y: [x, z],
  z: [v, y]
}

  v - w - x
  |       |
  z - - - y

shortestPath(edges, 'w', 'z'); // -> 2
test_01:
*/

const shortestPath = (edges, nodeA, nodeB) => {
  // inputs: array of subarrays of edges
  // output: the shortest distance from nodeA -> nodeB

  // convert our edges to a graph object using helper function
  const graph = convertEdges(edges);

  // store ref of visited nodes in a set
  const visited = new Set();

  // use breadth-first traversal to check our graph
  // build a queue and move nodeA, distance into queue
  const queue = [[nodeA, 0]];
  // while the queue is not empty, shift currNode, distance from queue
  while (queue.length > 0) {
    const [currNode, distance] = queue.shift();

    // if currNode = nodeB, we can return distance
    if (currNode === nodeB) return distance;

    for (let neighbor of graph[currNode]) {
      // if currNode's neighbors is not visited, add to visited set
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        // push the neighbors nodes to the queue
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;

  function convertEdges(edges) {
    const graph = {};

    for (let edge of edges) {
      const [first, second] = edge;
      if (!(first in graph)) graph[first] = [];
      if (!(second in graph)) graph[second] = [];
      graph[first].push(second);
      graph[second].push(first);
    }

    return graph;
  }
};

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

console.log(shortestPath(edges, 'w', 'z'));
