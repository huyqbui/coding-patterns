// Approach & Theory for graph problems!! 
/*

A graph is just a collection of nodes and edges

graph = nodes + edges

nodes = items w/data inside them
edges = connection between a pair of nodes
neighbor = nodes available through an edge

adjacency list = hash map data structure to represent a graph
keys = nodes of the graph
values = array with neighbor nodes


directed graph: unidirectional
undirected graph: bidirectional

a -> c
|    |
b <- e
|
d <- f

depth-1st-traversal:
  - travel in one direction as far as possible
  - uses a STACK (LIFO)

breadth-1st-traversal: 
  - travel immediate neighbors of the node
  - tend to explore all directions evenly
  - uses a QUEUE (FIFO)


*/



const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const dft = (graph, source) => {
  // create stack w/ empty array
  // push/pop to manipulate end of array
  const stack = [ source ];

  // ITERATIVE: run while stack is not empty
  while (stack.length) {
    const curr = stack.pop();
    console.log('curr:', curr)
    for (let value of graph[curr]) {
      stack.push(value)
    }
  }

};

// dft(graph, 'a');

const bft = (graph, source) => {
  // create queue w/ empty array
  // use shift(remove 1st el)/push to manipulate queue
  const queue = [ source ];
  while (queue.length) {
    const curr = queue.shift();
    console.log(curr)
    for (let value of graph[curr]) {
      queue.push(value)
    }
  }
}

bft(graph, 'a');


const dftRecursion = (graph, source) => {
  // no explicit BASE CASE, for loop has implicit base case
  console.log(source);

  // RECURSION
  for (let value of graph[source]) {
    dftRecursion(graph, value);
  }
}

// dftRecursion(graph, 'a')