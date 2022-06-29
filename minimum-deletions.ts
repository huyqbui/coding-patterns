/*

You are given a string s consisting only of characters 'a' and 'b'​​​​.
You can delete any number of characters in s to make s balanced. 
s is balanced if there is no pair of indices (i,j) 
such that i < j and s[i] = 'b' and s[j]= 'a'.
Return the minimum number of deletions needed to make s balanced.

Example 1:

Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete characters at indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete characters at indexed positions 3 and 6 ("aababbab" -> "aabbbb").
Example 2:

Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.

*/

const minimumDeletions = (s: string): number => {
  // store ref to num of b's, min num of deletions
  let numOfB: number = 0, minDeletions: number = 0;

  // iterate through string:
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase()
    // if char is 'a', then take the min between numOfB & minDeletions + 1
    if (char === 'a') minDeletions = Math.min(numOfB, minDeletions + 1)
    // if char is 'b', increment numOfB
    if (char === 'b') numOfB++;
  }
  return minDeletions;
}


console.log(minimumDeletions('aababbab')) // -> 2
console.log(minimumDeletions(' BBAAAAAABBBBBBBBAA')) // -> 2