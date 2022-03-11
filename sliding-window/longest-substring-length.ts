/*

Given a string with lowercase letters only, 
if you are allowed to replace no more than k letters with any letter, 
find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

*/

// Time: O(n) where n = str length | Space: O(1) where hash map = letters in alphabet(26)
const longestSubstringLength = (str: string, k: number) => {
  // store ref to start, end, maxRepeatCharCount, maxLength
  let start = 0,
    maxRepeatCharCount = 0,
    maxLength = 0;
  // use hash map to store char as keys, number frequency as value
  const hashMap: {[key: string]: number} = {};
  // iterate through string, storing char in hash map as 1 or incrementing its value if already in hash map
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    char in hashMap ? hashMap[char] += 1 : hashMap[char] = 1;
    // get the maxRepeatCharCount between itself and current char in hash map value
    maxRepeatCharCount = Math.max(maxRepeatCharCount, hashMap[char]);
    // check remaining letters in our window: (windowSize - maxRepeatCharCount)
    let windowSize = end - start + 1;
    if (windowSize - maxRepeatCharCount > k) {
      // if remaining letters is > k, then we need to decrement freq of start char & shrink window
      const leftChar = str[start];
      hashMap[leftChar]-= 1;
      start += 1;
      windowSize -= 1;
    }
    // get the maxLength between itself and windowSize
    maxLength = Math.max(maxLength, windowSize);
  }
  return maxLength;
};

console.log(longestSubstringLength('aabccbb', 2)) // -> 5
console.log(longestSubstringLength('abbcb', 1)) // -> 4
console.log(longestSubstringLength('abccde', 1)) // -> 3




