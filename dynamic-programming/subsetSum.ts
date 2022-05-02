/*
Given a set of positive numbers, 
determine if a subset exists whose sum is equal to a given number ‘S’.

Example 1:#
  Input: {1, 2, 3, 7}, S=6
  Output: True
  The given set has a subset whose sum is '6': {1, 2, 3}
Example 2:#
  Input: {1, 2, 7, 1, 5}, S=10
  Output: True
  The given set has a subset whose sum is '10': {1, 2, 7}
Example 3:#
  Input: {1, 3, 4, 8}, S=6
  Output: False
  The given set does not have any subset whose sum is equal to '6'.
*/

const subsetSum = (nums: number[], S: number) => {
  // create an array that is S length + 1 to store processed subproblems
  const arr = Array(S + 1).fill(false);
  arr[0] = true;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let sum = S; sum >= 0; sum--) {
      // take it or leave it
      if (!arr[sum] && sum >= num) 
        arr[sum] = arr[sum - num]   
    }
  }
  return arr[S]
}







console.log(subsetSum([1, 2, 3], 6)) //-> true;
console.log(subsetSum([1, 2, 3], 5)) //-> true;
console.log(subsetSum([1, 2, 3], 9)) //-> false;
console.log(subsetSum([1, 2, 7, 1, 5], 10)) //-> true;
console.log(subsetSum([1, 3, 4, 8], 6)) //-> false;


export {}