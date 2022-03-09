/*

test_01:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'j'); // false
test_02:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'i', 'h'); // true
test_03:
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'w'); // true
test_04:
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph, 'v', 'z'); // false

______

Write a function, hasPath, that takes in an object representing the adjacency list of 
a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating 
whether or not there exists a directed path between the source and destination nodes.

Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. 
Be productive, not stubborn. -AZ

test_00:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};
hasPath(graph, 'f', 'k'); // true

*/

// n = # of nodes
// e = # of edges
// Time: 0(e) | Space: 0(n)
const hasPath = (graph, src, dest) => {
  
  // use an iteractive dfs to traverse w/ stack
  const stack = [src]
  
  while (stack.length) {
    const curr = stack.shift()
    console.log('curr:', curr)
    // base case if src = dest, return true
    if (curr === dest) return true;
    
    // else check neighbor nodes
      for (let value of graph[curr]) {
        stack.push(value);
      }
    }
  
    return false;
}
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k')
