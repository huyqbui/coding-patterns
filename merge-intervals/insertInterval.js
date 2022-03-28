/*

Given a list of non-overlapping intervals sorted by their start time, 
insert a given interval at the correct position and merge all necessary intervals 
to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

*/

/* Three cases (Overall Approach):
If we have already added NewInterval, or curr Interval ends before newInterval starts
  - then we can push that interval into merged
If newInterval ends before curr Interval starts
  - then push newInterval, then curr Interval
  - reassign newInterval to null now that we've pushed it in
If newInterval overlaps with curr Interval at all
  - reassign newInterval's start to the smaller of newInterval or curr Interval's start
  - reassign newInterval's end to the greater of newInterval or curr Interval's end
*/

// Time: O(N) where N is number of intervals | Space: O(N) where N is the array of merged intervals
const insertInterval3 = (intervals, newInterval) => {
  if (intervals.length === 0) { // handle edge case
    return [ newInterval ];
  }

  const merged = [];
  let newInt = newInterval;

  for (const interval of intervals) {
    // if interval's end is less than new interval's start, push it into merged since it's smaller & doesn't overlap
    if (interval[1] < newInt[0]) {
      merged.push(interval);

      // if newInterval's end is less than interval's start, push it into merged and reassign newInt to be the interval
    } else if (newInt[1] < interval[0]) {
      merged.push(newInt)
      newInt = interval

      // if prev conditions don't hit, then the pairs overlap so we need to merge the pairs together
    }  else {
      let start = Math.min(newInt[0], interval[0]);
      let end = Math.max(newInt[1], interval[1]);
      newInt = [start, end]
    }
  }
  merged.push(newInt)
  return merged;
}
console.log(insertInterval3([ [1,3], [5,7], [8,12] ], [4,6])) //-> [ [1,3], [4,7], [8,12] ]
console.log(insertInterval3([ [1,5] ], [2,3])) //-> [ [1,5 ]