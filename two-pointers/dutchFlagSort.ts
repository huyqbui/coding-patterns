/*
Given an array containing 0s, 1s and 2s, sort the array in-place. 
You should treat numbers of the array as objects, 
hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; 
and since our input array also consists of three different numbers,
that is why it is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0, 0, 1, 1, 2]
Example 2:

Input: [2, 2, 0, 1, 2, 0]
Output: [0, 0, 1, 2, 2, 2,]
*/

// Time: O(N) Linear since we iterate arr only once | Space: O(1) Constant
const dutch_flag_sort = (arr: number[]) => {
  // use pointers for low(start of arr) and hi(end of arr)
  let low: number = 0, 
    hi: number = arr.length - 1, 
    i: number = 0;
  // init i at 0 and loop while i <= hi
  while (i <= hi) {
    // if arr[i] is 0:
    if (arr[i] === 0) {
      // swap the arr[i] w/ arr[low], increment low & i
      [ arr[i], arr[low] ] = [ arr[low], arr[i] ];
      low++; 
      i++;
    }
    // if arr[i] is 1, increment i
    else if (arr[i] === 1) i++;

    // else swap arr[i] w/ arr[hi], decrement hi
    else {
      [ arr[i], arr[hi] ] = [ arr[hi], arr[i] ];
      hi--;
    }
  }
  return arr;
};

console.log(dutch_flag_sort([1,0,2,1,0])) //-> 0,0,1,1,2
console.log(dutch_flag_sort([2,2,0,1,2,0])) //-> 0,0,1,2,2,2
