/*

Given a list of intervals representing the start and end time of ‘N’ meetings, 
find the minimum number of rooms required to hold all the meetings.

Example 1:
Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms 
  to hold these two meetings. [7,9] can occur in any of the two rooms later.

Example 2:
Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.

Example 3:
Meetings: [[1,4], [2,3], [3,6]]
Output:2
Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], 
  we need two rooms to hold all the meetings.

Example 4:
Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].

*/

const Heap = require('collections/heap');

// Time: O(N * logN) from sorting array, and then iterating through meetings
// Space: O(N) due to sorting
const minMeetingRooms = (meetings: number[][]) => {
  // sort the meetings by start times
  meetings.sort((a, b) => a[0] - b[0])

  let minRooms = 1,
    minHeap = new Heap([], null, ((a: number[], b: number[]) => b[1] - a[1]));
  
  // remove all meetings that have ended
  for (let i = 0; i < meetings.length; i++) {
    // compare roomsent meeting's start with minimum meeting's end time
    // if times do not overlap, remove the minimum meeting
    while (minHeap.length > 0 && meetings[i][0] >= minHeap.peek()[1]) {
      minHeap.pop()
    }

    // add roomsent meeting into minHeap
    minHeap.push(meetings[i]);

    // all active meetings are in minHeap, so minRooms will keep track of max rooms needed
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms
}

// Time: O(N * logN) from sorting array, and then iterating through meetings
// Space: O(N) due to sorting
const minMeetingRoomsNoHeap = (meetings: number[][]) => {
  // sort meetings, by start times
  meetings.sort((a, b) => a[0] - b[0]);
                         
  /* use two pointers approach:
     if meetings[next]start < meetings[curr]end, then curr meeting is still happening
     so we need increase rooms to hold those meetings
     if meetings[next]start >= meeting[curr]end, then room is now free
     so we can decrement rooms by one
  */
  let next = 1,
    curr = 0,
    rooms = 1,
    minRooms = 1;
  while (next < meetings.length && curr < meetings.length) {
    if (meetings[next][0] < meetings[curr][1]) {
      rooms++;
      next++;
    } else {
      rooms--;
      curr++
    }
    minRooms = Math.max(rooms, minRooms)
  }
  return minRooms
}

console.log(minMeetingRooms([ [1,4], [2,5], [7,9] ])) //-> 2
console.log(minMeetingRooms([ [6,7], [2,4], [8,12] ])) //-> 1
console.log(minMeetingRooms([ [1,4], [2,3], [3,6] ])) //-> 2
console.log(minMeetingRooms([ [4,5], [2,3], [2,4], [3,5] ])) //-> 2
console.log(minMeetingRoomsNoHeap([ [4,5], [2,3], [2,4], [3,5] ])) //-> 2
// [2,3], [2,4], [3,5], [4,5]