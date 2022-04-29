import { PriorityQueue } from '@datastructures-js/priority-queue';

/*
1. The function should accept a start and finish node as arguments
2. Create a distances, previous object. Create path array
3. Convert edges to an adjacency list
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
  const queue = new PriorityQueue((a,b) => a[1] < b[1] ? -1 : 1);
  const distances = {};
  const previous = {}
  let path = [];
  let smallest;
  const adjacencyList = buildGraph(edges);

  // fill distances with Infinity, fill previous with null
  for (const node in adjacencyList) {
      distances[node] = Infinity
      queue.enqueue(node, Infinity)
      previous[node] = null
  }

  distances[start] = 0;
  queue.enqueue([start, 0])

  console.log(adjacencyList)


  // DISTANCES[neighbor.val]    A:0     B:3     C:2     D:3    E:5
  // PREVIOUS                   { B:A, C:A, D:C}
  // QUEUE:                     [      ]

  while (!queue.isEmpty()) {
    smallest = queue.dequeue(); // [E:5]
    console.log(smallest)

    let curr = smallest[0]; 
    console.log(curr)
    

    if (curr === finish) {
      path = [finish]
      while (smallest[0] !== start) {
        path.push(previous[smallest[0]])
        smallest = previous[smallest[0]]
      }
      break;
    }

    if (smallest[1] || distances[smallest[1]] !== Infinity) {
      adjacencyList[curr].forEach(neighbor => {

        let dist = distances[curr] + neighbor.priority 

        if (dist < distances[neighbor.val]) {
          distances[neighbor.val] = dist
          previous[neighbor.val] = curr;
          queue.enqueue([neighbor.val, dist])
        }
      })
    }
  }

  console.log(path)
  return path.reverse()

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

console.log(dijkstra(edges, 'A', 'D'));

const newq = new PriorityQueue((a,b) => a[1] < b[1] ? -1 : 1)


newq.enqueue(['Starbucks', 10])
newq.enqueue(['Safeway', 5])
newq.enqueue(['Target', 20])
newq.enqueue(['Home', 0])
const smallest = newq.dequeue()
// console.log(smallest)
// console.log(newq._heap)

