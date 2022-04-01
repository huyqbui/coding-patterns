/*

Given an array of distinct integers. The task is to count all the triplets 
such that sum of two elements equals the third element.
 
Example 1:

Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: 2
Explanation: There are 2 triplets: 
1 + 2 = 3 and 3 +2 = 5 
â€‹Example 2:

Input: 
N = 3
arr[] = {2, 3, 4}
Output: 0
Explanation: No such triplet exits

*/

// Time: O(N^2) due to sorting, and then iterating and checking for pairs
// Space: O(N) due to sorting
const countTriplets = (arr: number[], n: number) => {
  let countedTriplets = 0;
  arr.sort((a, b) => a - b)
  for ( let curr = arr.length - 1; curr >= 1; curr--) {
    let lo = 0;        
    let hi = curr - 1;
      while (lo < hi) {
        if (arr[lo] + arr[hi] === arr[curr]) {
          countedTriplets++;
          lo++
          hi--;
        } 
      else if (arr[lo] + arr[hi] < arr[curr]) lo++;
      else hi--;
    }
  }
  return countedTriplets;
}

console.log(countTriplets([1, 5, 3, 2], 4)) //-> 2
console.log(countTriplets([3, 11, 16, 6, 14, 8], 6)) //-> 3
console.log(countTriplets([5, 2, 8, 14, 12, 10, 11], 7)) //-> 3