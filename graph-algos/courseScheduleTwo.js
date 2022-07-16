/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. 
If there are many valid answers, return any of them. 
If it is impossible to finish all courses, return an empty array.

Example 1:
  Input: numCourses = 2, prerequisites = [[1,0]]
  Output: [0,1]
  Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:
  Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
  Output: [0,2,1,3]
  Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. 
  Both courses 1 and 2 should be taken after you finished course 0.
  So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:
  Input: numCourses = 1, prerequisites = []
  Output: [0]
*/

// Time: O(n + m) where n is the number of keys in our adjList, and m is each vertex.
// Space: O(n + m) 
const courseScheduleTwo = (numCourses, prerequisites) => {
  const adjList = makeList(numCourses, prerequisites)
  const cycle = new Set(); // prevent us from cycling through the same numbers during dfs travel
  const visited = new Set(); // mark already added numbers
  const output = [];

  for (const course of adjList.keys()) {
    if (dfs(course) === false) return [];
  }

  return output;

  function makeList(num, pre) {
    const list = new Map();
    for (let i = 0; i < num; i++) {
      list.set(i, []);
    }
    for (const [a, b] of pre) {
      list.get(a).push(b);
    }
    return list;
  }

  function dfs(course) {
    if (cycle.has(course)) return false;
    if (visited.has(course)) return true;
    cycle.add(course);

    for (const preReq of adjList.get(course)) {
      if (dfs(preReq) === false) return false;
    }

    visited.add(course);
    cycle.delete(course);
    output.push(course);
    return true;
  }

}

const coursePreReqs1 = [[1,0],[2,0],[3,1],[3,2]]
const coursePreReqs2 = [ [0,1], [0,2], [1,3], [1,4], [3,4] ]
console.log(courseScheduleTwo(4, coursePreReqs1)) //-> [0, 1, 2, 3] || [0, 2, 1, 3]
console.log(courseScheduleTwo(5, coursePreReqs2)) //-> [4, 3, 2, 1, 0]
console.log(courseScheduleTwo(2, [])) //-> [0, 1]