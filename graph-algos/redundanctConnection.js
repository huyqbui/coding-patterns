/*
In this problem, a tree is an undirected graph that is connected and has no cycles.
You are given a graph that started as a tree with n nodes labeled 
from 1 to n, with one additional edge added. 
The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. 
The graph is represented as an array edges of length n where edges[i] = [ai, bi] 
indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. 
If there are multiple answers, return the answer that occurs last in the input.

Example 1:
  Input: edges = [[1,2],[1,3],[2,3]]
  Output: [2,3]

Example 2:
  Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
  Output: [1,4]
*/

// Time: O(n) since we traverse through each pair of edges
// Space: O(n)
const redundantConnection = (edges) => {

  const len = edges.length;
  const parent = Array(len + 1).fill(0).map((_, idx) => idx);
  const rank = Array(len + 1).fill(1);

  for (const [n1, n2] of edges) {
    if (findUnion(n1, n2) === false) return [n1, n2];
  }

  function findUnion(n1, n2) {
    let node1 = findParent(n1)
    let node2 = findParent(n2)
    if (node1 === node2) return false;

    if (rank[node1] > rank[node2]) {
      parent[node2] = node1;
      rank[node1] += rank[node2];
    } else {
      parent[node1] = node2;
      rank[node2] += rank[node1]
    }
  }

  function findParent(node) {
    let p = parent[node];
    while (p !== parent[p]) {
      parent[p] = parent[parent[p]]
      p = parent[p];
    }
    return p;
  }
}

const edges1 = [[1,2],[1,3],[2,3]]
const edges2 = [[1,2],[2,3],[3,4],[1,4],[1,5]]
console.log(redundantConnection(edges1)); //-> [2,3]
console.log(redundantConnection(edges2)); //-> [1,4]
