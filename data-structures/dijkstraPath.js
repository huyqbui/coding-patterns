import { PriorityQueue } from '@datastructures-js/priority-queue';

/*
1. The function should accept a start and finish node as arguments
2. Create a distances object that looks like our initial distances table
3. Create a previous object that looks like the one above
4. Add each node to the priority queue
5. Start a loop that continues as long as the priority queue has values
  - Dequeue a node and loop through each of its neighbors (using the adjacency list). 
  - If the node is our finish, we are done!
  - Calculate the distance between the start and our current node
  - If that distance is less than what we have stored:
    1. Update the distances and previous objects, 
    2. Enqueue that node with its new, smaller distance.
*/

function dijkstra(edges, start, finish) {
  const queue = new PriorityQueue((a,b) => a[1] < b[1]);
  const distances = {};
  const previous = {}
  let path = [];
  let smallest;
  const adjacencyList = buildGraph(edges);

  // fill distances with Infinity, except for the starting vertex
  for (const node in adjacencyList) {
    distances[node] = Infinity
  }

  distances[start] = 0;
  queue.enqueue([start, 0])


  while (!queue.isEmpty()) {
    smallest = queue.dequeue();

    let curr = smallest[0]; 

    adjacencyList[curr].forEach(neighbor => {
      let dist = distances[curr] + neighbor.priority 

      // compare added dist w/ what we currently have in distances obj
      if (dist < distances[neighbor.val]) {
        distances[neighbor.val] = dist
        previous[neighbor.val] = curr;
        queue.enqueue([neighbor.val, dist])
      }
    })
  }

  path = [finish]; // [A,B,C,D,E]
  let lastStep = finish;

  while (lastStep !== start) {
    path.unshift(previous[lastStep])
    lastStep = previous[lastStep]
  }

  return `Shortest Path is ${path} and shortest distance is ${distances[finish]}`

  function buildGraph(edges) {
    const graph = {}
    for (const [src, dest, priority] of edges) {

      if (!(src in graph)) graph[src] = []
      if (!(dest in graph)) graph[dest] = []

      graph[src].push({ val: dest, priority: priority });
      graph[dest].push({ val: src, priority: priority });
    }
    return graph;
  }
}

const edges = [
  ['A', 'B', 3],
  ['A', 'C', 2],
  ['B', 'D', 2],
  ['C', 'D', 1],
  ['C', 'E', 4],
  ['D', 'E', 2],
];

console.log(dijkstra(edges, 'A', 'E'));

