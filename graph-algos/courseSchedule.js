/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that 
you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
    Input: numCourses = 5, prerequisites = [ [0,1], [0,2], [1,3], [1,4], [3,4] ]
    Output: true
    Explanation: There are a total of 5 courses to take. 
    To take course 0 you have to finish courses 1 & 2.
    To finish course 1 you have finish courses 3 & 4.
    To finish course 3 you have to finish course 4.
    Courses 2 & 4 have no prerequisites.
*/

var canFinish = function(numCourses, prerequisites) { 
  const adjList = makeList(prerequisites); // make an adjacencyList    
  const visited = new Set(); // will check if we already visited a course
  
  for (const course in adjList) {
      if (dfs(course) === false) return false;
  }
  return true;
  
  function makeList(data) { // build a directed graph list using prerequisites
      const list = {};
      for (const [a,b] of data) {
          list[a] = list[a] ?? [];
          list[b] = list[b] ?? [];
          list[a].push(b);
      }
      return list;
  }
  
  function dfs(course) {
      if (visited.has(course)) return false;
      if (adjList[course] === []) return true;
      visited.add(course);

      for (const preReq of adjList[course]) {
          if (dfs(preReq) === false) return false;
      }

      visited.delete(course);
      adjList[course] = [];
      return true;
  }
};
const coursePreReqs = [ [0,1], [0,2], [1,3], [1,4], [3,4] ]
console.log(canFinish(5, coursePreReqs)) //-> true;