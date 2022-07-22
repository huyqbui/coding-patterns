/*
Given an array of intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

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

// Time: O(N log n) due to sorting
// Space: O(N log n) due to sorting
const nonOverlappingIntervals = (intervals: number[][]): number => {
  intervals.sort((a,b) => a[1] - b[1]); 
  let current = intervals[0];
  let count = 0;
  
  for(let i = 1; i < intervals.length; i++) {
      if(intervals[i][0] < current[1]) count++; 
      else current = intervals[i];
  }
  return count
}

const test1 = [[1,2],[2,3],[3,4],[1,3]]
const test2 = [[1,2],[1,2],[1,2]]
const test3 = [[1,2],[2,3]]
console.log(nonOverlappingIntervals(test1)) //-> 1
console.log(nonOverlappingIntervals(test2)) //-> 2
console.log(nonOverlappingIntervals(test3)) //-> 0

export {}