/*

An administrator for Amazon Human Resources has created a queue 
of all current compliance issues along with their priorities. 
The priorities range from 1 to 99. 
Create an algorithm that will reassign priorities so that the value 
of the maximum priority assigned is minimized, 
keeping the order of priorities between all issues the same.

Example:
priorities = [1, 4, 8, 4]

There are three priority levels: 1, 4 and 8. 
The array elements are reassigned to priorities [1, 2, 3, 2]. 
Their order of priorities are maintained while the value of the maximum priority is minimized.
Given the priorities of the issues, 
return a list that contains the reassigned priority values without reordering.

Function Description:
Complete the reassignedPriorities function in the editor below. 
It must return an integer array that represents the reassigned priorities of each element in the original order.
reassignedPriorities has the following parameter(s):
    int priorities[n]: an array of integers that represents current priorities

Constraints:
1 <= n <= 10^5
1 <= priorities[i] <= 99

Sample Case:
  Input:
  n = 4
  priorities = [1, 3, 7, 3]

  Output:
  [1 2 3 2]
*/

/*
  sort the arr, then iterate through it
  create an obj to map priority levels to the arr element
  iterate through array one more time to reassign each element to it's priority
*/

// Time: O(n logn) due to sorting, then iterating through the copy and original arrays
// Space: O(n) for sorting and creating a map
const reassignedPriorities = (n: number, priorities: number[]) => {
  const copy = priorities.slice(0);
  
  sort(copy)

  const pMap = new Map()
  let level = 1;
  for (const num of copy) {
    if (!pMap.has(num)) {
      pMap.set(num, level);
      level++;
    }
  }

  for (let i = 0; i < priorities.length; i++) {
    priorities[i] = pMap.get(priorities[i]);
  }

  return priorities

  function sort(arr: number[]) {

  }
}

const reassignedPriorities2 = (n: number, priorities: number[]) => {
  // since we know priorities goes up to 99, we can create an array to keep track of the count of each priority
  const counts = Array(100).fill(0);

  for (const num of priorities) {
    counts[num]++;
  }

  let reducedPriority = 1;
  for (let i = 1; i < counts.length; i++) {
      if (counts[i] > 0)
        counts[i] = reducedPriority++;
    }
    

  for (let i = 0; i < priorities.length; i++) {
    priorities[i] = counts[priorities[i]];
  }

  return priorities;
}

console.log(reassignedPriorities2(4, [1, 3, 7, 3])) //-> [1, 2, 3, 2]
// console.log(reassignedPriorities(5, [0, 10, 5, 0, 15])) //-> [1, 3, 2, 1, 4]
// console.log(reassignedPriorities(8, [1, 4, 9, 3, 5, 4, 1, 9])) //-> [1, 3, 5, 2, 4, 3, 1, 5]
const num = 123

const strNum = String(num)

