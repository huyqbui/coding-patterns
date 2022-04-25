/*
Given an array of intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of intervals you need to remove 
to make the rest of the intervals non-overlapping.

Example 1:
  Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
  Output: 1
  Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
  Input: intervals = [[1,2],[1,2],[1,2]]
  Output: 2
  Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
  Input: intervals = [[1,2],[2,3]]
  Output: 0
  Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/

// Time: O(N logN) from sorting and then iterating through sorted intervals
// Space: O(N) due to sorting
const eraseOverlapIntervals = (intervals: number[][]) => {
  // create local counter for removedIntervals
  let removedIntervals = 0;

  // sort the intervals by end tuple
  let newIntervals = [...intervals].sort(((a,b) => a[1] - b[1]));

  let currEnd = newIntervals[0][1]

  // iterate through array of intervals
  for (let i = 1; i < newIntervals.length; i++) {
    let nextStart = newIntervals[i][0];
    // check if currInterval and the nextInterval overlap
    if (nextStart < currEnd) 
      removedIntervals++;
    else 
      currEnd = newIntervals[i][1]
    
  }
  return removedIntervals;
}

const test1 = [[1,2],[2,3],[3,4],[1,3]]
const test2 = [[1,2],[1,2],[1,2]]
const test3 = [[1,2],[2,3]]
const test4 = [[1,100],[11,22],[1,11],[2,12]]
const test5 = [[0,2],[1,3],[2,4],[3,5],[4,6]]

console.log(eraseOverlapIntervals(test1)) //-> 1
console.log(eraseOverlapIntervals(test2)) //-> 2
console.log(eraseOverlapIntervals(test3)) //-> 0
console.log(eraseOverlapIntervals(test4)); //-> 2
console.log(eraseOverlapIntervals(test5)); //-> 2

export {}