/*

Given two strings containing backspaces (identified by the character ‘#’), 
check if the two strings are equal.

Example 1:
Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.

Example 2:
Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.

Example 3:
Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.

*/


// Time: O(N + M) Linear where N,M = length of strings | Space: O(1) Constant
const backspace_compare = function(str1: string, str2: string) {
  // use two pointers to check str from the end
  // iterate starting from end, till endChar reaches 0

  let endChar1 = str1.length - 1,
    endChar2 = str2.length - 1;
  while (endChar1 >= 0 && endChar2 >=0) {
    // assign ref for index 1, index 2
    // use helper function to do backspaces check
    let i1 = removeBackspace(str1, endChar1),
      i2 = removeBackspace(str2, endChar2);
    
    // if we reach start of str, then all chars were equal
    if (i1 < 0 && i2 < 0) return true;

    // if we reach start of either str first, then they weren't equal after removing backspace
    if (i1 < 0 || i2 < 0) return false;

    // check if chars are same
    if (str1[i1] !== str2[i2]) return false

    // decrement endChar pos to check next char
    endChar1 = i1 - 1;
    endChar2 = i2 - 1;
  }

  return true;

  function removeBackspace(str: string, index: number) {
    let backspaceCount = 0;
    // check for backspaces w/ a counter, and move index back accordingly
    while (index >= 0) {
      if (str[index] === '#') backspaceCount++;
      else if (backspaceCount > 0) backspaceCount--;
      else break;
    index--;
    }
    return index
  }
};

console.log(backspace_compare('xy#z', 'xzz#')); //-> true
console.log(backspace_compare('xp#', 'xyz##')); //-> true
console.log(backspace_compare('xy#z', 'xyz#')); //-> false
console.log(backspace_compare('xywrrmp', 'xywrrmu#p')); //-> true