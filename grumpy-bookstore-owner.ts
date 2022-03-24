/*

There is a bookstore owner that has a store open for n minutes. 
Every minute, some number of customers enter the store. 
You are given an integer array customers of length n where customers[i] is the number of the customer 
that enters the store at the start of the ith minute 
and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. 
You are given a binary array grumpy where grumpy[i] 
is 1 if the bookstore owner is grumpy during the ith minute, 
and is 0 otherwise.

When the bookstore owner is grumpy, 
the customers of that minute are not satisfied, 
otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves 
not grumpy for minutes consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

Example 1: 

Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

*/

const maxSatisfied = function(customers: number[], grumpy: number[], minutes: number) {
  let happy = 0,
  secretHappy = 0,
  left = 0,
  max = 0;
  
  // iterate through customers, grab the total of happy customers when owner's mood is 0,
  for (let end = 0; end < customers.length; end++) {
    const ownerMood = grumpy[end]
    const curr = customers[end];
    if (ownerMood === 0) {
      happy += curr;
      
      // else grab and store the highest total of secretHappy customers when owner's mood is 1
    } else {
      secretHappy += curr;
      max = Math.max(max, secretHappy)
    }
    
    // slide window to adjust the total of secretHappy customers according to minutes
    if (end >= minutes) {
      if (grumpy[left] === 1) {
        secretHappy -= customers[left]
      }
      left++
    }
  }
  return happy + max
} 


console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)) //-> 16
console.log(maxSatisfied([3], [1], 1)) //-> 3