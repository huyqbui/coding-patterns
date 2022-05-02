/*
Given an array of predicted rainfall for next n days, 
where index i presents a day and day[i] represents the amount of rainfall on that day, 
return a list of ideal days such that -

day[i-k] >= day[i-k+1] >= ... day[i-1] >= day[i] <= day[i+1] ... <= day[i+k-1] <= day[i+k],

where k is given as an input which represents the number of days prior and after the current day.
As index represents day, while returning, we need to return i+1 as the actual day.

Example:
  day = [3,2,2,2,3,4]
  k = 2
  Output: [3,4]

  Explanation:
    the rainfall trend for day3 (i = 2) is day1 >= day2 >= day3 <= day4 <= day5 so day3 is ideal
    the rainfall trend for day4 (i = 3) is day2 >= day3 >= day4 <= day5 <= day6 so day4 is ideal

  Constraints: 
    i <= k <= n <= 2x10^5
    0 <= day[i] <= 10^9
*/

const idealDays = (days: number[], k: number) => {
  const output = [];
  const left = Array(days.length).fill(0);
  const right = [...left];
  const len = left.length;

  // fill left array with values of calculated subproblems
  for (let i = 1; i < len; i++) {
    if (left[i] >= left[i - 1]) left[i] = i + left[i - 1];
    else left[i] = i;
  }

  // fill right array with values of calculated subproblems
  right[len - 1] = len;
  for (let i = len - 2; i >= 0; i--) {
    if (right[i] <= right[i + 1]) right[i] = i + right[i + 1];
    else right[i] = i;
  }

  // push the corresponding index if we hit our conditionals
  for (let i = k; i < len - k; i++) {
    if (left[i] >= k && right[i] >= k) output.push(i + 1);
  }

  return output;
};

/* Another approach:
const idealDaysAlt = (days: number[], k: number) => {
  const output = []
  let possible;
  for (let i = k; i < days.length - k; i++) {
    possible = true;
    let leftBoundary = k - i
    let rightBounday = k + i
    for (let left = k; left >= leftBoundary; left--) {
      if (days[left - 1] < days[left]) {
        possible = false;
        break;
      }
    }
    for (let right = k; right <= rightBounday; right++) {
      if (days[right - 1] > days[right]) {
        possible = false;
        break;
      }
    }
    if (possible) output.push(i + 1);
  }
  return output
}
*/
console.log(idealDays([3, 2, 2, 2, 3, 4], 2)); // [3, 4]
console.log(idealDays([1, 0, 1, 0, 1], 2)); // [3]
console.log(idealDays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3)); // [4, 5, 6, 7
