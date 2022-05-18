/*

Given two strings str1 and str2 and below operations that can be performed on str1. 
Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.  

Insert. Remove. Replace.
All of the above operations are of equal cost. 

Examples: 
  Input:   str1 = "geek", str2 = "gesek"
  Output:  1
  We can convert str1 into str2 by inserting a 's'.

  Input:   str1 = "cat", str2 = "cut"
  Output:  1
  We can convert str1 into str2 by replacing 'a' with 'u'.

  Input:   str1 = "sunday", str2 = "saturday"
  Output:  3
  Last three and first characters are same.  We basically
  need to convert "un" to "atur".  This can be done using
  below three operations. 
  Replace 'n' with 'r', insert t, insert a
*/

// This is also known as the Levenshtein distance algorithm!

// Time: O(m * n) where m is length of str1, and n is length of str2
// Space: O(m * n) where m is length of str1, and n is length of str2
    // space can be O(m) if we only use two rows to store our values being calculated
const editDistance = (str1: string, str2: string) => {
  // create a 2d matrix to represent the best possible minEdits for each char in str1 & str2
  const arr = Array(str1.length)
    .fill(0)
    .map(n => Array(str2.length).fill(0));

  // if first char in str1 and str2 don't match, then update arr[0][0] to 1;
  if (str1[0][0] !== str2[0][0]) arr[0][0] = 1;

  // fill the initial row and initial col with minEdits needed
  for (let r = 1; r < str2.length; r++) {
    arr[0][r] = r;
  }
  for (let c = 1; c < str1.length; c++) {
    arr[c][0] = c;
  }

  // fill the rest of the matrix with the best possible minEdit values needed
  let diag, leftPrev, topPrev;
  for (let col = 1; col < str1.length; col++) {
    for (let row = 1; row < str2.length; row++) {
      diag = arr[col - 1][row -1]
      leftPrev = arr[col][row - 1]
      topPrev = arr[col - 1][row]

      // if char's match, then assign the arr to be it's diag val
      // otherwise, store the min value of the previous left, top, or diag values and increment by 1
      if (str1[col] === str2[row]) {
        arr[col][row] = diag;
      } else {
        arr[col][row] = Math.min(diag,leftPrev, topPrev) + 1
      }
    }
  }
  return arr[str1.length - 1][str2.length - 1];
} 

console.log(editDistance('geek', 'gesek')) //-> 1
console.log(editDistance('sunday', 'saturday')) //-> 3
console.log(editDistance('mentors', 'center')) //-> 3