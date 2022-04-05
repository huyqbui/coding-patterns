/*

Given an array of intervals representing ‘N’ appointments, 
find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.


*/

// Time: O(N logN) since we sort the array and then iterate through it
// Space: O(N) for sorting
const conflictingAppointments = (n) => {
  n.sort((a, b) => a[0] - b[0])
  console.log(n, n.length)

  // check for overlaps
  for (let i = 1; i < n.length; i++) {
    let PrevEnd = n[i - 1][1];
    let currStart = n[i][0];
    if (currStart < PrevEnd) return false
  }
  return true;
}

console.log(conflictingAppointments([[1,4], [2,5], [7,9]])) //-> false
console.log(conflictingAppointments([[6,7], [2,4], [8,12]])) //-> true
console.log(conflictingAppointments([[4,5], [2,3], [3,6]])) //-> false