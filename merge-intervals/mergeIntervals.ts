/*

Given a list of intervals, merge all the overlapping intervals 
to produce a list that has only mutually exclusive intervals.

Example 1:

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, 
we merged them into one [1,5].

Example 2:

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, 
we merged them into one [5,9].

Example 3:

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, 
we merged them into one.

*/

// Time: O(N * logN) where O(N) from iterating through intervals & O(logN) from sorting
// Space: O(N) where N is the array list of merged intervals
const mergeIntervals = (intervals: number[][]): number[][] => {
  // sort the intervals array
  const sorted = intervals.sort((a, b) => a[0] - b[0])

  // initialize an empty array to store merged intervals
  const merged: number[][] = [];
  // grab the first interval tuple
  let start = intervals[0][0]; 
  let end = intervals[0][1];
  // iterate through rest of intervals, looking for overlapping numbers
  for (let i = 1; i < intervals.length; i++) {
    // deconstruct current interval tuple
    const [iStart, iEnd] = intervals[i]; 
    // if overlapping intervals, re-adjust the 'end' (grab the greater of the end's)
    if (iStart <= end) end = Math.max(end, iEnd);
    else { // else non-overlapping intervals, so push the previous interval & then reassign start, end to current interval
      merged.push([start, end]);
      start = iStart;
      end = iEnd;
    }
  }
  // add the last interval
  merged.push([start, end]);
  return merged;
}

console.log(mergeIntervals([ [2, 5], [7, 9], [1 ,4] ])) //-> [ [1,5], [7,9] ]
console.log(mergeIntervals([ [6, 7], [2, 4], [5, 9] ])) //-> [ [2,4], [5,9] ]
console.log(mergeIntervals([ [1, 4], [2, 6], [3, 5] ])) //-> [ [1,6] ]
