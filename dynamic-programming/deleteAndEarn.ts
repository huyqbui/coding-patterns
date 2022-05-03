/*

You are given an integer array nums. 
You want to maximize the number of points you get by 
performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. 
Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.

 

Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.

*/

// Time: O(N + k) where N is length of nums, and k is unique sub-problems
// Space: O(N + k) where N is length of nums, and k is number of unique sub-problems
const deleteAndEarn = (nums: number[]) => {
  // Top-down approach w/ caching and recursion
  // need to find max points of any given number
  // we can create an object to store nums, and their totalPoints if we were to choose them
  // we can also create a cache to memo the calculations of each subproblem
  const points: {[key: string]: number} = {};
  const cache: {[key: string]: number} = {};
  let maxNum = 0;
  for (const num of nums) {
    points[num] = (points[num] || 0) + num;
    maxNum = Math.max(maxNum, num);
  }

  return maxPoints(maxNum);

  // to get maxPoints at any num, we will either take a num or leave it
  // takeit: maxPoints(num - 2) + gain
  // leaveit: maxPoints(num - 1)
  // we can just grab the greater of take or leave
  function maxPoints(num: number) {
    if (num === 0) return 0;
    if (num === 1) return points[1] || 0;
    if (cache.hasOwnProperty(num)) return cache[num];

    let gain = points[num] || 0;
    let takeIt = maxPoints(num - 2) + gain;
    let leaveIt = maxPoints(num - 1);
    cache[num] = Math.max(takeIt, leaveIt);

    return cache[num];
  }
};

// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])) //-> 9

// Time: O(N + k) where N is length of nums, and k is unique sub-problems
// Space: O(N) where N is number of unique elements in nums
const deleteAndEarnTabulation = (nums: number[]) => {
  // Bottom-up approach w/ hash object
  // loop through nums to find the maxNum, and fill object with nums, and their totalPoints
  // use two variables to store take it or leave it calculations
  // track the greater of the two variables, and then update them
  // return the variable storing the greatest vaule
  const points: {[key: string]: number} = {};
  let maxNum = 0;
  for (const num of nums) {
    points[num] = (points[num] || 0) + num;
    maxNum = Math.max(num, maxNum);
  }

  let twoBack = 0;
  let oneBack = points[1] || 0;

  for (let i = 2; i < maxNum; i++) {
    let temp = oneBack;
    oneBack = Math.max(oneBack, twoBack + (points[i] || 0));
    twoBack = temp;
  }
  return oneBack;
};

console.log(deleteAndEarnTabulation([2, 2, 3, 3, 3, 4])); //-> 9
