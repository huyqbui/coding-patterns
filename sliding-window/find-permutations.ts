/*

Given a string and a pattern, 
find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. 
For example, “abc” has the following six permutations:
abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.

*/

// Time: Linear O(n + m) n = str, m = pattern | Space: Constant O(m) where hash map could have m keys
const findPermutation = (str: string, pattern: string) => {
  // create a hash map to store pattern chars and their frequency
  const hashMap: {[key: string]: number} = {}
  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    hashMap.hasOwnProperty(chr) ? hashMap[chr] ++ : hashMap[chr] = 1;
    
  }
  
  
  let start: number = 0, matched: number = 0;
  // store ref to start, end, matched
  // iterate through str
  for (let end = 0; end < str.length; end++) {
    // if char is in hash map, decrement its value in hash map
    let char: string = str[end]
    if (char in hashMap) {
      hashMap[char] --;
      // if char = 0, then we have a complete match (increment matched)
      if (hashMap[char] === 0) matched ++;
    }

  // if value of matched = hash map's length, then we found a permutation(return true)
    if (matched === Object.keys(hashMap).length) return true;

    // if end pos >= pattern's length - 1, "shrink the window"
    if (end >= pattern.length -1) {
      //  grab the char at the start pos
      let leftChar: string = str[start]
      start ++;
      // if this char is a key in our hash map, then we need to return its freq to the hash map
      if (leftChar in hashMap) {
        if (hashMap[leftChar] === 0) matched --;
        hashMap[leftChar] ++;
      }
    }
  }
  return false;
};

console.log(findPermutation('oidbcaf', 'abc')) // -> true
console.log(findPermutation('qdicf', 'dc')) // -> false
