/*
Given a string, find the length of the longest substring, 
which has all distinct characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/

const nonRepeatSubstring = (str: string): number => {
  // store ref to start, end, maxDistinct
  let start = 0, end = 0, maxDistinct = 0;
  // store char in hash map as keys, values as pos of char
  const hashMap: {[key: string]: number} = {};
  // iterate through str:
  for (let end = 0; end < str.length; end++) {
    const char = str[end]
    // if char in hash map, reassign start to max between start & value of char + 1
    if (char in hashMap) {
      start = Math.max(start, hashMap[char] + 1)
    }
    // set char in hash map value to end 
    hashMap[char] = end
    // reassign maxDinstict to max between itself and end - start + 1
    maxDistinct = Math.max(maxDistinct, end - start + 1)
  }
  return maxDistinct;
};

console.log(nonRepeatSubstring('aabcdcbb')) // -> 4
console.log(nonRepeatSubstring('abccde')) // -> 3
console.log(nonRepeatSubstring('supercalifragilisticexpialidocious')) // -> 10