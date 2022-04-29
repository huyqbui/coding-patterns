type Vertex = {
  edge: string;
  weight: number;
}
interface AdjencencyList {
  [key: string]: {edge: string, weight: number}[]
}

class WeightedGraph {
  adjacencyList: AdjencencyList;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList.hasOwnProperty(vertex))
      this.adjacencyList[vertex] = [];
  }

  addEdge(source: string, dest: string, weight: number) {
    this.adjacencyList[source].push({ edge: dest, weight: weight });
    this.adjacencyList[dest].push({ edge: source, weight: weight });
  }

  removeVertex(vertex: string) {
    const list = this.adjacencyList[vertex];
    if (!list) return;
    while (list.length) {
      const adjacentNode = list.pop();
      if (adjacentNode) this.removeEdge(vertex, adjacentNode.edge);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(source: string, dest: string) {
    const list = this.adjacencyList;
    list[source] = list[source].filter(
      (vertex: Vertex) => vertex.edge !== dest
    );
    list[dest] = list[dest].filter(
      (vertex: Vertex) => vertex.edge !== source
    );
  }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('A');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E')
graph.addEdge('A', 'B', 3);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'D', 2);
graph.addEdge('C', 'D', 1);
graph.addEdge('C', 'E', 4);
graph.addEdge('D', 'E', 2);

for (let vertex in graph.adjacencyList) {
  console.log(vertex)
}

console.log(JSON.stringify(graph.adjacencyList, null, 4));

export {};
