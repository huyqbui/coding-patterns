/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]
Example 2:
  Input: nums = [1], k = 1
  Output: [1]
*/

// init a freq array, where index will be the count, and value will be a list of values that occurs count times

// Time: O(N) where N is length of nums
// Space: O(N) where N is the size of our count map object
const topKFrequent = (nums: number[], k: number) => {
  const count = new Map()
  const freq = Array(nums.length + 1).fill(null);

  for (const num of nums) {
    count.set(num, (count.get(num) + 1) || 1)
  }

  for (const [key, value] of count) {
    if (freq[value]) freq[value].push(key);
    else freq[value] = [key]
  }

  const result = [];
  let i = freq.length - 1;
  while (result.length < k) {
    if(freq[i]) result.push(...freq[i])
    i--;
  }
  while (result.length > k) {
    result.pop()
  }
  return result;
}

console.log(topKFrequent([1,1,1,2,2,3], 2)) //-> [1,2]
console.log(topKFrequent([1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 4], 2)) //-> [1,2]

export {}