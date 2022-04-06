/*

For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. 
Our goal is to find out if there is a free interval that is common to all employees. 
You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employees are free between [3,5].
Example 2:

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employees are free between [4,6] and [8,9].
Example 3:

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employees are free between [5,7].

*/

// Time: O(N logN) from sorting and then iterating through hours
// Space: O(N) due to sorting
const employeeFreeTime = (hours:number[][][]): number[][] => {
  // put all employee hours together in a flattened array, and sort by start times
  const freeHours: number[][] = [];
  const allHours = hours.flat().sort((a, b) => a[0] - b[0])

  /* two pointers approach:
    if next[start] > currEnd
      -> push the currEnd, next[start]
      -> reassign currStart & currEnd
    otherwise, grab the greater of currEnd and next[end]
  */
  let currStart = allHours[0][0],
    currEnd = allHours[0][1];
  
  for (let i = 1; i < allHours.length; i++) {
    const next = allHours[i];

    if (next[0] > currEnd) {
      freeHours.push([currEnd, next[0]])
      currStart = next[0]
      currEnd = next[1]
    } else {
      currEnd = Math.max(currEnd, next[1])
    }
  }
  return freeHours;
}


console.log(employeeFreeTime([ [[1,3], [5,6]], [[2,3], [6,8]] ])) // -> [ [3,5] ]
console.log(employeeFreeTime([ [[1,3], [9,12]], [[2,4]], [[6,8]] ])) // -> [ [4,6], [8,9] ]
console.log(employeeFreeTime([ [[1,3]], [[2,4]], [[3,5], [7,9]] ])) // -> [ [5,7] ]
