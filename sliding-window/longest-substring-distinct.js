// Time: O(n) | Space: O(k + 1)
const longestSubstringDistinct = function(str, k) {
  // store ref to start, end, hash map of unique chars, maxLen, currLen
  let start = 0, maxLen = 0, currLen = 0
  const frequency = {};
  // iterate through str, add char to hash map if unique, increment its value otherwise
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    char in frequency ? frequency[char]++ : frequency[char] = 1;

    // while hash map length is >= k:
    while (Object.keys(frequency).length > k) {
      let leftChar = str[start]
      frequency[leftChar] -= 1;
      if (frequency[leftChar] === 0) {
        delete frequency[leftChar];
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

console.log(longestSubstringDistinct('araaci', 2))
console.log(longestSubstringDistinct('araaci', 1))
console.log(longestSubstringDistinct('cbbebi', 3))
console.log(longestSubstringDistinct('cbbebi', 10))

