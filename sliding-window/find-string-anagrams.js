/*

Every anagram is a permutation of a string. 
When we are not allowed to repeat characters while finding permutations of a string, 
we get N! permutations (or anagrams) of a string having N characters. 
For example, here are the six anagrams of the string “abc”:

abc, acb, bac, bca, cab, cba

Given a string and a pattern, write a function to:
return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/


const findStringAnagrams = (str, pattern) => {
  const result = [];
  // store start, end, freq obj, matched
  let start = 0, freq = {}, matched = 0
  // add all chars in pattern to freq obj
  for (let i =0; i < pattern.length; i++) {
    let char = pattern[i];
    char in freq ? freq[char]++ : freq[char] = 1
  }

  // iterate through str chars
  for (let end = 0; end < str.length; end++) {
    let rightChar = str[end]
  // if char is in freq obj, decrement its value, increment matched
    if (rightChar in freq) {
      freq[rightChar] -= 1;
      if (freq[rightChar] === 0) matched += 1;
    }
  // if matched = freq obj's length, push start's value into result
    if (matched === Object.keys(freq).length) {
      result.push(start)
    }

  // if end val is >= freq obj's length - 1, 'shrink' the window
    if (end >= pattern.length - 1) {
      // grab the char at the start val
      let leftChar = str[start]
      // increment start
      start += 1;
      // if char is in freq obj, if char = 0, decrement matched
      if (leftChar in freq) {
        if (freq[leftChar] === 0) matched -= 1;
        // increment char at start       
        freq[leftChar] += 1;  
      }
    }
  }
  return result;
};

console.log(findStringAnagrams('abbcabc', 'abc'))
