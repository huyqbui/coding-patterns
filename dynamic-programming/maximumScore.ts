/*

You are given two integer arrays nums and multipliers of size n and m respectively, 
where n >= m. The arrays are 1-indexed.

You begin with a score of 0. You want to perform exactly m operations. 
On the ith operation (1-indexed), you will:

Choose one integer x from either the start or the end of the array nums.
Add multipliers[i] * x to your score.
Remove x from the array nums.
Return the maximum score after performing m operations.

Example 1:
  Input: nums = [1,2,3], multipliers = [3,2,1]
  Output: 14
  Explanation: An optimal solution is as follows:
  - Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
  - Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
  - Choose from the end, [1], adding 1 * 1 = 1 to the score.
  The total score is 9 + 4 + 1 = 14.

Example 2:
  Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]
  Output: 102
  Explanation: An optimal solution is as follows:
  - Choose from the start, [-5,-3,-3,-2,7,1], adding -5 * -10 = 50 to the score.
  - Choose from the start, [-3,-3,-2,7,1], adding -3 * -5 = 15 to the score.
  - Choose from the start, [-3,-2,7,1], adding -3 * 3 = -9 to the score.
  - Choose from the end, [-2,7,1], adding 1 * 4 = 4 to the score.
  - Choose from the end, [-2,7], adding 7 * 6 = 42 to the score. 
  The total score is 50 + 15 - 9 + 4 + 42 = 102.

Constraints:
  n == nums.length
  m == multipliers.length
  1 <= m <= 103
  m <= n <= 105
  -1000 <= nums[i], multipliers[i] <= 1000
*/

const maximumScore = (nums: number[], multipliers: number[]) => {
  let n = nums.length,
    m = multipliers.length;
  let arr = Array(n + 1).fill(0);
  let prev = 0;

  for (let i = m - 1; i >= 0; i--) {
    let mult = multipliers[i];
    for (let left = i; left >= 0; left--) {
      let temp = arr[left];
      let right = n - 1 - (i - left);

      let takeLeft = mult * nums[left] + prev;
      let takeRight = mult * nums[right] + arr[left];

      arr[left] = Math.max(takeLeft, takeRight);
      prev = temp;
    }
    prev = arr[i];
  }
  return arr[0];
};

console.log(maximumScore([1, 2, 3], [3, 2, 1])); //-> 14
console.log(maximumScore([1, 2], [3, 2])); //-> 14

const nums3 = [
  555, 526, 732, 182, 43, -537, -434, -233, -947, 968, -250, -10, 470, -867,
  -809, -987, 120, 607, -700, 25, -349, -657, 349, -75, -936, -473, 615, 691,
  -261, -517, -867, 527, 782, 939, -465, 12, 988, -78, -990, 504, -358, 491,
  805, 756, -218, 513, -928, 579, 678, 10,
];
const mult3 = [
  783, 911, 820, 37, 466, -251, 286, -74, -899, 586, 792, -643, -969, -267, 121,
  -656, 381, 871, 762, -355, 721, 753, -521,
];

console.log(maximumScore(nums3, mult3)); //-> 6861161
