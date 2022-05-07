/*
Given a string s and a dictionary of strings wordDict, return true 
if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.


Example 1:
  Input: s = "codesmith", wordDict = ["code","smith"]
  Output: true
  Explanation: Return true because "codesmith" can be segmented as "code smith".

Example 2:
  Input: s = "applepenapple", wordDict = ["apple","pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
  Note that you are allowed to reuse a dictionary word.

Example 3:
  Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  Output: false
  Explanation: We can segment "cats" and "and" but then we are left with "og"
*/

// Time: O(N^3) for the nested loop, and the substring computation inside the nested loop
// Space: O(n) where n is the length of the array 
const wordBreak = (s: string, wordDict: string[]) => {
  if (!s) return false
  const arr = Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    for (const word of wordDict) {
      let wLen = word.length;
      if (i >= wLen - 1 && (i === wLen - 1 || arr[i - wLen])) {
        if (s.substring(i - wLen + 1, i + 1) === word) {
          arr[i] = true;
          break;
        }
      }
    }
  }
  return arr[s.length - 1];
};

console.log(wordBreak('codesmith', ['code', 'smith'])); //-> true
console.log(wordBreak('applepenapple', ['apple', 'pen'])); //-> true
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])); //-> false
console.log(wordBreak('', ['a', 'b', 'c'])); //-> false
console.log(wordBreak('abc', [])); //-> false
