/*

We are given a list of Jobs. 
Each job has a Start time, an End time, and a CPU load when it is running. 
Our goal is to find the maximum CPU load at any time 
if all the jobs are running on the same machine.

- Example 1:
Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).

- Example 2:
Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.

- Example 3:
Jobs: [[1,4,2], [2,4,1], [3,6,5]]
Output: 8
Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4]. 

*/
// Time: O(N * logN) from sorting array, and then iterating through meetings
// Space: O(N) due to sorting
const maxCPULoad = (jobs: number[][]): number => {
  // sort the jobs by start times
  jobs.sort((a, b) => a[0] - b[0])

  /* use two pointers approach: next, curr, load, maxLoad
    if jobs[next]start < jobs[curr]end, then jobs overlap
      -> so add their loads together, increment next pointer
    otherwise jobs don't overlap, so decrement loads, and move curr pointer
    keep track of overall maxLoad in  each iteration
  */
  let next = 1,
    curr = 0,
    load = jobs[curr][2],
    maxLoad = 0;
  while (next < jobs.length && curr < jobs.length) {
    if (jobs[next][0] < jobs[curr][1]) {
      load += jobs[next][2];
      next++
    } else {
      load -= jobs[curr][2];
      curr++
    }
    maxLoad = Math.max(load, maxLoad)
  }
  return maxLoad
}

console.log(maxCPULoad([[1,4,3], [2,5,4], [7,9,6]])) //-> 7
console.log(maxCPULoad([[6,7,10], [2,4,11], [8,12,15]])) //-> 15
console.log(maxCPULoad([[1,4,2], [2,4,1], [3,6,5]])) //-> 8




