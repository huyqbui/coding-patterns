/*

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent houses have s
ecurity systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
  Input: nums = [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
  Total amount you can rob = 1 + 3 = 4.

Example 2:
  Input: nums = [2,7,9,3,1]
  Output: 12
  Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
  Total amount you can rob = 2 + 9 + 1 = 12.
 
Constraints:
  1 <= nums.length <= 100
  0 <= nums[i] <= 400
*/

// Time: O(N) where N is number of houses
// Space: O(N) where N is number of houses
const rob = (houses: number[]) => {
  const arr = Array(houses.length)
  arr[0] = houses[0];
  arr[1] = Math.max(houses[0], houses[1])
  for (let i = 2; i < houses.length; i++) {
    // take: arr[i - 2] + houses[i]
    // leave: arr[i - 1]
    let robIt = arr[i - 2] + houses[i]
    let leaveIt = arr[i - 1]
    arr[i] = Math.max(robIt, leaveIt)
  }

  return arr[houses.length - 1]
}

console.log(rob([1, 2, 3, 1])) //-> 4
console.log(rob([2, 7, 9, 3, 1])) //-> 12