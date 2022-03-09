/*

Write a function, largestComponent, 
that takes in the adjacency list of an undirected graph. 
The function should return the size 
of the largest connected component in the graph.

test_00:
largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); 

output: 4

*/

const largestComponent = (graph) => {
  // inputs: graph object of nodes
  // ouput: a number of the largest component size

  // store ref to largest
  let largest = 0;
  // store ref to visited nodes
  const visited = new Set();
  // iterate through each node in graph 
  for (let node in graph) {
    // travel and get size of component w/ helper function
    let size = travel(graph, node, visited)
    if (size > largest) largest = size;
  }

  return largest;

  function travel(graph, currNode, visited) {
    // if visited, return 0, else add currNode to visited set
    if (visited.has(currNode)) return 0;
    visited.add(currNode);
    // init size at 1
    let size = 1;
    // helper function will travel through currNode and its neighbors
    for (let neighbor of graph[currNode]) {
    // recursively call function to traverse neighbors, incrementing size
      size += travel(graph, neighbor, visited)
    }
    // return size
    return size;
  }
}


const graph1 = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

console.log(largestComponent(graph1));
