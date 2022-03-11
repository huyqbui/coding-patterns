// Time: O(n) | Space: O(k + 1)
const longestSubstringDistinct = function(str: string, k: number) {
  // store ref to start, end, frequency obj of unique chars, maxLen, currLen
  let start: number = 0, 
    maxLen: number = 0, 
    currLen: number = 0;
  const frequency: {[key: string]: number} = {};
  // iterate through str, add char to obj if unique, increment its value otherwise
  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    char in frequency ? frequency[char]++ : frequency[char] = 1

    // while obj length is >= k:
    while (Object.keys(frequency).length > k) {
      const leftChar = str[start]
      frequency[leftChar] -= 1;
      if (frequency[leftChar] <= 0) {
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

console.log(longestSubstringDistinct('araaci', 2)) // 4
console.log(longestSubstringDistinct('araaci', 1)) // 2
console.log(longestSubstringDistinct('cbbebi', 3)) // 5
console.log(longestSubstringDistinct('cbbebi', 10)) // 6

