/*
You have a graph of n nodes labeled from 0 to n - 1. 
You are given an integer n and a list of edges where edges[i] = [ai, bi] 
indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example 1:
  Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
  Output: true

Example 2:
  Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
  Output: false
*/

/*
// a valid tree will have no loops, and its connected nodes will equal our n input
// create an adjacencyList
// dfs traverse through each key in our list, starting with 0;
// use a visited hash set to keep track of visited values
// keep track of prev node to prevent false positives
*/

// Time: O(n + m) where n is number of nodes and m is number of edges
// Space: O(n + m)
const validTree = (n, edges) => {
  const list = makeList(n, edges);
  const visited = new Set();
  return dfs(0, -1) && visited.size === n;

  function makeList(n, edges) {
    const list = {};
    for (let i = 0; i < n; i++) {
      list[i] = [];
    }
    for (const [a, b] of edges) {
      list[a].push(b)
      list[b].push(a)
    }
    return list
  }

  function dfs(node, prev) {
    console.log('dfs invoked on:', 'node:', node, 'prev:', prev)
    if (visited.has(node)) return false;
    visited.add(node);

    for (const val of list[node]) {
      if (val === prev) continue;
      if (dfs(val, node) === false) return false;
    }
    return true;
  }
}

const test1 = [[0,1],[0,2],[0,3],[1,4]]
const test2 = [[0,1],[1,2],[2,3],[1,3],[1,4]]
const test3 = [[2,3],[1,2],[1,3]]
console.log(validTree(5, test1)); //-> true;
console.log(validTree(5, test2)); //-> false;
console.log(validTree(4, test3)); //-> false;