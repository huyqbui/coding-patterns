/*
Given a string containing just the characters '(' and ')', 
find the length of the longest valid (well-formed) parentheses substring.

Example 1:
  Input: s = "(()"
  Output: 2
  Explanation: The longest valid parentheses substring is "()".

Example 2:
  Input: s = ")()())"
  Output: 4
  Explanation: The longest valid parentheses substring is "()()".

Example 3:
  Input: s = ""
  Output: 0
*/

// Time: O(n) where we iterate twice and n is length of s
// Space: O(1) for storing the needed variables
const longestValidParentheses = (s: string) => {
  if (!s.length) return 0;

  let maxLength = 0,
    left = 0,
    right = 0;

  // iterate forwards through string, and check each char
  for (const char of s) {
    if (char === '(') left++;
    if (char === ')') right++;
    if (left === right) maxLength = Math.max(maxLength, left + right);
    if (right > left) {
      left = 0;
      right = 0;
    }
  }

  // reset left and right, and iterate backwards through string
  // check each char in string, and update maxLength as needed
  left = 0;
  right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (char === '(') left++;
    if (char === ')') right++;
    if (left === right) maxLength = Math.max(maxLength, left + right);
    if (left > right) {
      left = 0;
      right = 0;
    }
  }
  return maxLength;
};

console.log(longestValidParentheses('')); //-> 0
console.log(longestValidParentheses('(()')); //-> 2
console.log(longestValidParentheses(')()())')); //-> 4
console.log(longestValidParentheses('()(()')); //-> 2
