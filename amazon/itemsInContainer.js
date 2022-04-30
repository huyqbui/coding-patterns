/*
Amazon would like to know how much inventory exists in their closed inventory compartments. Given a string s
consisting of items as "*" and closed compartments as an open and close "|", an array of starting indices startIndices, 
and an array of ending indices endIndices, determine the number of items in closed compartments 
within the substring between the two indices, inclusive.
An item is represented as an asterisk ('*' = ascii decimal 42)
A compartment is represented as a pair of pipes that 
may or may not have items between them ('|' = ascii decimal 124).

Example
s = '|**|*|*'
startIndices = [1, 1]
endIndices = [5, 6]
The string has a total of 2 closed compartments, one with 2 items and one with 1 item. 
For the first pair of indices, (1, 5), the substring is '|**|*'. There are 2 items in a compartment.
For the second pair of indices, (1, 6), the substring is '|**|*|' and there are 2 + 1 = 3 items in compartments.
Both of the answers are returned in an array, [2, 3].
*/

// Time: O(N) for looping through str and then startInd
// Space: O(N) for the array we create to store values
const getItems = (str, startInd, endInd) => {
  /* Notes:
   create an array the length of str and fill with 0
   create an output array
   init count to 0

   iterate through str
     if char is '*' increment count, fill arr[i] w/ value from arr[i - 1]
    else fill arr[i] with count

   iterate through startInd
     get start and end values
     calc arr at end minus arr at start
     push calc to output 
    */

  const arr = Array(str.length)
  arr[0] = 0;
  const output = [];
  let count = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === '*') {
      count++;
      arr[i] = arr[i - 1]
    }
    else arr[i] = count;
  }
  
  for (let i = 0; i < startInd.length; i++) {
    let start = startInd[i]; // 1
    let end = endInd[i]; // 5
    let starCount = arr[end - 1] - arr[start - 1];
    output.push(starCount);
  }
  return output;
}

console.log(getItems('|**|*|*', [1, 1], [5, 6])); // [2,3]