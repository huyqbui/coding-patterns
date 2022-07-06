/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. 
Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, 
she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
  Input: piles = [3,6,7,11], h = 8
  Output: 4

Example 2:
  Input: piles = [30,11,23,4,20], h = 5
  Output: 30

Example 3:
  Input: piles = [30,11,23,4,20], h = 6
  Output: 23
*/

// Time: O(n * log m) where log m is from performing binary search, times n for calculating hourSpent each time
// Space: O(1) for each mid, we iterate through array and calulate hourSpent in constant space
const minEatingSpeed = (piles: number[], h: number) => {
  let left = 1;
  let right = Math.max(...piles)

  while (left < right) {
    let mid = Math.floor( (left + right) / 2);
    let hourSpent = 0;
    for (const pile of piles) {
      hourSpent += Math.ceil(pile / mid);
    }
    if (hourSpent <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)) //-> 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) //-> 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)) //-> 23
console.log(minEatingSpeed([1000000000,1000000000], 3)) //-> 1000000000