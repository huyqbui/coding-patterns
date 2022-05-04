/*

Given two strings text1 and text2, 
return the length of their longest common subsequence. 
If there is no common subsequence, return 0.

A subsequence of a string is a new string generated 
from the original string with some characters (can be none) deleted 
without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence 
that is common to both strings.

Example 1:
  Input: text1 = "abcde", text2 = "ace" 
  Output: 3  
  Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
  Input: text1 = "abc", text2 = "abc"
  Output: 3
  Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
  Input: text1 = "abc", text2 = "def"
  Output: 0
  Explanation: There is no such common subsequence, so the result is 0.
 
Constraints:
  1 <= text1.length, text2.length <= 1000
  text1 and text2 consist of only lowercase English characters.
*/

const longestCommonSubsequence = (text1: string, text2: string): number => {
  if (text1.length > text2.length) {
    let temp = text1;
    text1 = text2;
    text2 = temp;
  }
  // create arrays for prev and prev to store the calculations of our subproblems
  let arr = Array(text1.length + 1).fill(0);
  let prev = [...arr];

  // iterate through col & row, starting from last one
  for (let col = text2.length - 1; col >= 0; col--) {
    // store the vals of arr for later
    let temp = arr;
    for (let row = text1.length - 1; row >= 0; row--) {
      if (text1.charAt(row) === text2.charAt(col)) {
        // if char matches, then add one to val of arr's prev pos
        prev[row] = 1 + arr[row + 1];
      } else {
        // else get the greater of the arr val, or the val of the prev pos
        prev[row] = Math.max(arr[row], prev[row + 1]);
      }
    }
    // swap the arr and prev
    arr = prev;
    prev = temp;
  }
  return arr[0];
};

console.log(longestCommonSubsequence('abcde', 'ace')); //-> 3
console.log(longestCommonSubsequence('abc', 'def')); //-> 0
console.log(longestCommonSubsequence('ezupkr', 'ubmrapg')); //-> 2
console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv')); //-> 1
console.log(longestCommonSubsequence('ab', 'ba')); //-> 1

export {}