// Time: O(n) | Space: O(k + 1)
const longestSubstringDistinct = function(str: string, k: number) {
  // store ref to start, end, hash map of unique chars, maxLen, currLen
  let start: number = 0, 
    maxLen: number = 0, 
    currLen: number = 0;
  const frequency: Map<string, any> = new Map()
  // iterate through str, add char to hash map if unique, increment its value otherwise
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    char in frequency ? frequency.get(char).val++ : frequency.set(char, {val: 1});
    console.log(frequency.size)
    // while hash map length is >= k:
    while (frequency.size > k) {
      const leftChar = str[start]
      if (frequency.get(leftChar) !== undefined) frequency.get(leftChar).val -= 1;
      if (frequency.get(leftChar).val <= 0) {
        frequency.delete(leftChar);
      }
      start++;
    }
    currLen = end - start + 1;
    // grab greater value between current maxLen and hash map's length;
    maxLen = Math.max(maxLen, currLen)
  }
  // return maxLen
  return maxLen;
};

console.log(longestSubstringDistinct('araaci', 2)) // 4
// console.log(longestSubstringDistinct('araaci', 1)) // 2
console.log(longestSubstringDistinct('cbbebi', 3)) // 5
console.log(longestSubstringDistinct('cbbebi', 10)) // 6

