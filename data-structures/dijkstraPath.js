import { PriorityQueue } from '@datastructures-js/priority-queue';

/* 
  1. convert edges to an adjacency list
  2. create dist object, prev object, path array, priorityQueue
  3. iterate through each node in our list
  4. fill distances w/ Infinity's, prev w/ nulls, enqueue priorityQueue with [node, Infinity]
  5. reassign distance[start] to 0 & enqueue [start, 0]
  6. while queue not empty, dequeue smallest node
    if smallest = finish, we can exit and build paths
    for each neighbor of smallest node
      calculate distance between start and current node
      if dist < what's in the distance object for that key
        - reassign value in distance obj to dist
        - create key for neighbor in prev and assign value as smallest
        - enqueue that node with the new dist
*/

const dijkstra = (edges, start, finish) => {
  const list = buildAdjacencyList(edges);
  const dist = {};
  const prev = {};
  const pq = new PriorityQueue((a, b) => (a[1] < b[1] ? -1 : 1));

  for (const node in list) {
    dist[node] = Infinity;
    pq.enqueue([node, Infinity]);
    prev[node] = null;
  }

  dist[start] = 0;
  pq.enqueue([start, 0]);

  let smallest, distance, curr, paths;
  while (!pq.isEmpty()) {
    smallest = pq.dequeue();
    curr = smallest[0];

    if (curr === finish) {
      paths = [finish];
      while (smallest[0] !== start) {
        paths.push(prev[smallest[0]]);
        smallest = prev[smallest[0]];
      }
      break;
    }

    if (smallest[1] || dist[smallest[1]] !== Infinity) {
      list[curr].forEach((neighbor) => {
        const { val, priority } = neighbor;
        distance = dist[curr] + priority;

        if (distance < dist[val]) {
          dist[val] = distance;
          prev[val] = curr;
          pq.enqueue([val, distance]);
        }
      });
    }
  }

  return `shortest path = ${paths.reverse()} & distance = ${dist[finish]}`;

  function buildAdjacencyList(edges) {
    const list = {};

    for (const [src, dest, priority] of edges) {
      if (!(src in list)) list[src] = [];
      if (!(dest in list)) list[dest] = [];

      list[src].push({ val: dest, priority: priority });
      list[dest].push({ val: src, priority: priority });
    }
    return list;
  }
};

const edges = [
  ['A', 'B', 3],
  ['A', 'C', 2],
  ['B', 'D', 2],
  ['C', 'D', 1],
  ['C', 'E', 4],
  ['D', 'E', 2],
];

console.log(dijkstra(edges, 'A', 'E'));
// shortest path = A,C,D,E & distance = 5
console.log(dijkstra(edges, 'C', 'E'));
// shortest path = C,D,E & distance = 3
