class Graph {
  adjacencyList: { [key: string]: string[] };
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(source: string, dest: string) {
    this.adjacencyList[source].push(dest);
    this.adjacencyList[dest].push(source);
  }

  removeEdge(source: string, dest: string) {
    const list = this.adjacencyList;

    list[source] = list[source].filter((vertex: string) => vertex !== dest);
    list[dest] = list[dest].filter((vertex: string) => vertex !== source);
  }

  removeVertex(vertex: string) {
    while (this.adjacencyList[vertex].length) {
      const adjacent = this.adjacencyList[vertex].pop();
      if (adjacent) this.removeEdge(vertex, adjacent);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirst(start: string) {
    const stack = [start];
    const result = [];
    const visited = new Set();
    visited.add(String(start));

    while (stack.length) {
      let curr = stack.pop();
      let list;
      result.push(curr);
      if (curr) list = this.adjacencyList[curr];
      if (list) {
        list.forEach((neighbor: string) => {
          if (!visited.has(String(neighbor))) {
            console.log(neighbor);
            visited.add(String(neighbor));
            stack.push(neighbor);
          }
        });
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.removeVertex('D');
graph.removeEdge('A', 'C');

const list = graph.adjacencyList;
console.log(list);

export {};
